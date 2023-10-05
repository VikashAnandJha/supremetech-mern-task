import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './components/LoginForm.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import ErrorPage from './components/error-page.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import UserDashboard from './components/UserDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  }, {
    path: "/login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  }, {
    path: "/register",
    element: <RegistrationForm />,
    errorElement: <ErrorPage />,
  }, {
    path: "/dashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
