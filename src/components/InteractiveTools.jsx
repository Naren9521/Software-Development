import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PronunciationTrainer from "./PronounciationTrainer";

const InteractiveTools = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            <div className="interactive-card-container">
              <Link to="pronunciation-trainer" className="card">
                <img
                  src="../images/pronounciation.png"
                  alt="Pronunciation Icon"
                  className="card-icon"
                />
                <h2>Pronunciation Trainer</h2>
                <p>Practice pronunciation with audio feedback.</p>
              </Link>
              <div className="card">
                <h2>Language Games</h2>
                <p>Engage in fun language learning games.</p>
              </div>
            </div>
          }
        />
        <Route path="pronunciation-trainer" element={<PronunciationTrainer />} />
      </Routes>
    </div>
  );
};

export default InteractiveTools;
