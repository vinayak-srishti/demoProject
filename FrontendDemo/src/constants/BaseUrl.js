import axios from 'axios';

// Determine the base URL.
// In production, this uses the VITE_BACKEND environment variable set during the CI/CD build.
// In development, it falls back to the local API endpoint.
const API_BASE_URL = import.meta.env.VITE_BACKEND || 'http://localhost:3000/demo/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance
