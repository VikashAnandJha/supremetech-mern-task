import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
    baseURL,
});

// Function to set the Bearer token in the request headers
const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export const login = (credentials) => api.post('/login', credentials);
export const register = (userData) => api.post('/register', userData);

// Function to get users with filters
export const getUsers = (filters, token) => {
    // Set the Bearer token in the headers
    setAuthToken(token);

    // Make the GET request with filters
    return api.get('/getUsers', { params: filters });
};

export default api;
