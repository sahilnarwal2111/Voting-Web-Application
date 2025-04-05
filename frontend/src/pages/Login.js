import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="login-page-container">
      <h1>Login</h1>
      <p>Welcome back! Please log in to your account.</p>
      <LoginForm />
    </div>
  );
};

export default Login;