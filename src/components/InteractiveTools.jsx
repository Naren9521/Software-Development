import React, { useState } from 'react';
import PronunciationTrainer from './PronounciationTrainer';

const InteractiveTools = () => {
  const [activeTool, setActiveTool] = useState(null);

  const handleClick = (tool) => {
    setActiveTool(tool);
  };

  return (
    <div className="card-container">
      {activeTool === 'PronunciationTrainer' ? (
        <PronunciationTrainer />
      ) : (
        <>
          <div className="card" onClick={() => handleClick('PronunciationTrainer')}>
            <img src="images/pronounciation.png" alt="Tools Icon" className="card-icon" />
            <h2>Pronunciation Trainer</h2>
            <p>Practice your pronunciation with audio feedback.</p>
          </div>
          <div className="card">
            <img src="images/Games.png" alt="Tools Icon" className="card-icon" />
            <h2>Language Games</h2>
            <p>Engage in fun language learning games.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InteractiveTools;
