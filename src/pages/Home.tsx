import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import StatusCheck from '../components/StatusCheck';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Clinic Scheduler
          </Typography>
          <Typography variant="body1" paragraph>
            This is a placeholder for the Clinic Scheduling System frontend application.
          </Typography>
        </Paper>
        
        <StatusCheck />
      </Box>
    </Container>
  );
};

export default Home;