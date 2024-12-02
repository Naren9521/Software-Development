import React from 'react';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
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
          <h2>Grammar Course</h2>
          <p>Master grammar with comprehensive lessons.</p>
        </div>
        <div className="card">
          <h2>Writing Course</h2>
          <p>Improve your writing skills with structured lessons.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
