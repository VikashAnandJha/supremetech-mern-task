// RegistrationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../services/api';
import { setUser } from '../features/auth/authSlice';

import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        password: '',
        department: '',
    });
    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const response = await register(userData);
            dispatch(setUser(response.data.user));
            console.log(response.data.user)
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        } catch (error) {
            alert(error.response.data.message)
            console.error('Registration failed:', error);

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>

                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register page
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Name"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="department" className="sr-only">
                            Department
                        </label>
                        <input
                            id="department"
                            name="department"
                            type="text"
                            autoComplete="department"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Department"
                            value={userData.department}
                            onChange={(e) => setUserData({ ...userData, department: e.target.value })}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
