import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to headers if it exists in localStorage
if (localStorage.token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
}

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;

    // Handle specific error cases
    if (response && response.status === 401) {
      // Unauthorized - clear token
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
    }

    return Promise.reject(error);
  }
);

export default api;