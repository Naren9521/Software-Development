import React from 'react';

const Resources = () => {
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
        <h2>Dictionary</h2>
        <p>Look up words in our extensive dictionary.</p>
      </div>
      <div className="card">
        <h2>E-books</h2>
        <p>Access a library of e-books to enhance your learning.</p>
      </div>
    </div>
    </div>
  );
};

export default Resources;
