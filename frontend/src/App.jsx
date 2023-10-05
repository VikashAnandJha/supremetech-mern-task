import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserDashboard from './components/UserDashboard';
import Filters from './components/Filters';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <div className='text-center my-3'>
        <h1 className="text-center text-4xl my-3">
          Simple React Proj
        </h1>

        <Link to={'/login'} className="bg-blue-500 text-white py-2 px-4 rounded">Login</Link>
        <Link to={'/register'} className="bg-blue-500 text-white py-2 px-4 rounded m-5">Register</Link>


        {/* <LoginForm />
        <RegistrationForm />
        <UserDashboard />
        <Filters /> */}
      </div>
    </Provider>
  );
};

export default App;
