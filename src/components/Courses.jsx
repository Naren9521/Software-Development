import React from 'react';

const Courses = () => {
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
    <div className="card-container">
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
