import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Clinic Scheduler
          </Typography>
          <Typography variant="body1" paragraph>
            Clinic Scheduler is a comprehensive scheduling system designed for clinics with 
            professionals of different specialties, such as psychologists, psychopedagogues, 
            occupational therapists, speech therapists, and more.
          </Typography>
          <Typography variant="body1" paragraph>
            The system allows coordinators to manage schedules for their specialty, while 
            professionals can view their appointments and receive notifications about changes.
          </Typography>
          <Typography variant="body1" paragraph>
            This is a placeholder application built with React, TypeScript, and Material-UI.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;