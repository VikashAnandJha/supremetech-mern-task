import { LOGIN_USER, REGISTER_USER, APPLY_FILTERS } from './types';

export const loginUser = (userData) => ({
    type: LOGIN_USER,
    payload: userData,
});

export const registerUser = (userData) => ({
    type: REGISTER_USER,
    payload: userData,
});

export const applyFilters = (filters) => ({
    type: APPLY_FILTERS,
    payload: filters,
});
