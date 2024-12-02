import React from 'react';

const Progress = () => {
  return (
    <div className="content">
      <div className="top-bar">
        <div className="heading">
          <h1>Learn from the best</h1>
        </div>
        <div className="right-section">
          <button className="upgrade-btn">Upgrade to Premium</button>
          <div className="profile">
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
