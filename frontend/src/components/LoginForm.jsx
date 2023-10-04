import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (userData) => {
        dispatch(loginUser(userData));
    };

    return (
        <div>Login</div>
    );
};

export default LoginForm;
