import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import { getStatus } from '../services/api';

const StatusCheck: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        setLoading(true);
        const data = await getStatus();
        setStatus(data);
        setError(null);
      } catch (err) {
        setError('Failed to connect to the backend API');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Backend API Status
        </Typography>
        
        {loading && <CircularProgress size={24} />}
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        
        {!loading && !error && status && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {status.status} (Timestamp: {new Date(status.timestamp).toLocaleString()})
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusCheck;