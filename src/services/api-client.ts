import { useAuthStore } from '@store/auth/useAuth';
import axios from 'axios';

export const API_URL = `http://localhost:5000/api`;

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore.getState().logout();
    }
    Promise.reject(error);
  },
);
