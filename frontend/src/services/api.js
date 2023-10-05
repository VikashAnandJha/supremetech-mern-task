import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
    baseURL,
});

export const login = (credentials) => api.post('/login', credentials);
export const register = (userData) => api.post('/register', userData);
export const getUsers = (filters) => api.get('/users', { params: filters });

export default api;
