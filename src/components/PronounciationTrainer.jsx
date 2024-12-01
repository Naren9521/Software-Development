import React, { useState } from 'react';
import '../assets/styles/pronounciationTrainer.css';

const PronunciationTrainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="interactive-card-container">
      <textarea
        className="text-area"
        placeholder="Enter your text which you want to pronounce or click on generate random text after choosing the level....."
      ></textarea>
      <div className="button-group">
        <div className="level-buttons">
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </div>
        <button className="play-button" onClick={handlePlayPause}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>
      <div className="button-group" style={{ justifyContent: 'flex-end', marginTop: '10px' }}>
        <button>Generate Random Text</button>
        <button>Get Report</button>
      </div>
    </div>
  );
};

export default PronunciationTrainer;
