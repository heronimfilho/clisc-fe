// src/services/api.ts
import axios from 'axios';

// The API URL should come from environment variables
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5289';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getStatus = async () => {
  try {
    const response = await api.get('/status');
    return response.data;
  } catch (error) {
    console.error('Error fetching API status:', error);
    throw error;
  }
};

export default api;