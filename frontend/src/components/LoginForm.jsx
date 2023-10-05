import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../services/api';
import { setUser } from '../features/auth/authSlice';
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(credentials)


        try {
            const response = await login(credentials);
            console.log(response.data)
            dispatch(setUser(response.data.user));
            console.log(response.data.user)
            navigate("/dashboard");
        } catch (error) {
            console.error('Login failed:', error);
            alert(error.response.data.message)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <Link to={'/'}>back to home</Link>
                    <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Supreme Technologies</h1>
                    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" method='post' onSubmit={handleLogin}>
                    {/* Your form fields go here */}
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <input
                            value={credentials.username}
                            id="username"
                            name="username"
                            type="text"

                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}


                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            value={credentials.password}

                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}

                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
