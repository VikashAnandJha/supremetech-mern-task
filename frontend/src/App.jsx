import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserDashboard from './components/UserDashboard';
import Filters from './components/Filters';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LoginForm />
        <RegistrationForm />
        <UserDashboard />
        <Filters />
      </div>
    </Provider>
  );
};

export default App;
