import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Polling App</h1>
      <p>Create, manage, and participate in polls easily.</p>

      <div className="home-buttons">
        <button onClick={() => navigate('/dashboard')} className="home-button">
          View Polls
        </button>
        <button onClick={() => navigate('/login')} className="home-button">
          Login
        </button>
        <button onClick={() => navigate('/register')} className="home-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;