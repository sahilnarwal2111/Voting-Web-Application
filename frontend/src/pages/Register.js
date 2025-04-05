import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="register-page-container">
      <h1>Register</h1>
      <p>Create a new account to start participating in polls.</p>
      <RegisterForm />
    </div>
  );
};

export default Register;