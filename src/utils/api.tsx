// src/services/api.ts
import axios from 'axios';
import { useAuth } from '../services/authService';

// API base URL
const API_URL = 'https://fakestoreapi.com'; // Replace with your API base URL

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the authentication token
api.interceptors.request.use(
  (config) => {
    const { currentUser } = useAuth();
    if (currentUser && currentUser.token) {
      config.headers['Authorization'] = `Bearer ${currentUser.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
