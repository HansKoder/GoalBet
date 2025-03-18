// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL del backend Nest.js
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
