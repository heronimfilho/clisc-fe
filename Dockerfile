FROM node:18
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Start in development mode by default
CMD ["npm", "start"]