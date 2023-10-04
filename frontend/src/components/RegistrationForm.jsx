import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleRegistration = (userData) => {
        dispatch(registerUser(userData));
    };

    return (
        <>Reg form</>
    );
};

export default RegistrationForm;
