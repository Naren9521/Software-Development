import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to redirect

const Progress = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile')
  };
  return (
    <div className="content">
      <div className="top-bar">
        <div className="heading">
          <h1>Learn from the best</h1>
        </div>
        <div className="right-section">
          <button className="upgrade-btn">Upgrade to Premium</button>
          <div className="profile" onClick={handleProfileClick}>
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>
      <div className="interactive-card-container">
        <div className="card">
          <h2>Quizzes</h2>
          <p>Test your knowledge with interactive quizzes.</p>
        </div>
        <div className="card">
          <h2>Certificates</h2>
          <p>Earn certificates as you complete courses.</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
