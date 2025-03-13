# Build stage
FROM node:18 AS build
WORKDIR /app

# Cache dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built files from build stage
COPY --from=build /app/build .

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set environment variables at runtime using a script
RUN echo '#!/bin/sh \n\
sed -i "s|REACT_APP_API_URL_PLACEHOLDER|'"$BACKEND_IP"'|g" /usr/share/nginx/html/index.html \n\
nginx -g "daemon off;"' > /docker-entrypoint.sh && \
chmod +x /docker-entrypoint.sh

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1

# Standard web port
EXPOSE 80

# Start nginx
ENTRYPOINT ["/docker-entrypoint.sh"]