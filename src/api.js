// src/api.js
import { useMutation } from 'react-query';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export function useRegister() {
  return useMutation(async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/register`, formData);
    return response.data;
  });
}

export function useLogin() {
  return useMutation(async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/login`, formData);
    return response.data;
  });
}
