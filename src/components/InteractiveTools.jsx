import React, { useState } from 'react';
import PronunciationTrainer from './PronounciationTrainer';

const InteractiveTools = () => {
  const [activeTool, setActiveTool] = useState(null);

  const handleClick = (tool) => {
    setActiveTool(tool);
  };

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
      {activeTool === 'PronunciationTrainer' ? (
        <PronunciationTrainer />
      ) : (
        <>
          <div className="card" onClick={() => handleClick('PronunciationTrainer')}>
            <img src="/images/pronounciation.png" alt="Tools Icon" className="card-icon" />
            <h2>Pronunciation Trainer</h2>
            <p>Practice your pronunciation with audio feedback.</p>
          </div>
          <div className="card">
            <h2>Language Games</h2>
            <p>Engage in fun language learning games.</p>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default InteractiveTools;
