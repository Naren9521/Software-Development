import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import pronounciationImage from '/assets/images/pronounciation.png'
import mic from '/assets/images/microphone.png'

import PronunciationTrainer from "./PronounciationTrainer";
import SpeechPractice from './SpeechPractice'
const InteractiveTools = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <div className="content">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="heading">
          <h1>Learn from the best</h1>
        </div>
        <div className="right-section">
          <div className="profile" onClick={toggleProfile}>
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      {isProfileOpen && <Profile />}

      {/* Routes and Card Container */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="interactive-card-container">
              <Link to="pronunciation-trainer" className="card">
                <img
                  src={pronounciationImage}
                  alt="Pronunciation Icon"
                  className="card-icon"
                />
                <h2>Pronunciation Check</h2>
                <p>Practice pronunciation with audio feedback.</p>
              </Link>
              <Link to="speech-practice" className="card">
                <img
                  src={mic}
                  alt="Mic icon"
                  className="card-icon"
                />
                <h2>Speech Practice</h2>
                <p>Enhance your speaking skills.</p>
              </Link>
            </div>
          }
        />
        <Route path="pronunciation-trainer" element={<PronunciationTrainer />} />
        <Route path="speech-practice" element={<SpeechPractice />} /> {/* New route */}
      </Routes>
    </div>
  );
};

export default InteractiveTools;