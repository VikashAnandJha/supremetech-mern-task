// RegistrationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../services/api';
import { setUser } from '../features/auth/authSlice';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleRegistration = async () => {
        try {
            const response = await register(userData);
            dispatch(setUser(response.data));
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>RegForm</div>
    );
};

export default RegistrationForm;
