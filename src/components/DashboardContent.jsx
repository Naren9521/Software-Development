import React, { useState } from "react";
import InteractiveTools from "./InteractiveTools";
import Courses from "./Courses";
import Resources from "./Resources";
import Progress from "./Progress";

const DashboardContent = () => {
  const [activeSection, setActiveSection] = useState("default");

  const renderContent = () => {
    switch (activeSection) {
      case "interactive-tools":
        return <InteractiveTools />;
      case "courses":
        return <Courses />;
      case "resources":
        return <Resources />;
      case "progress":
        return <Progress />;
      default:
        return (
          <div className="card-container">
            <div className="card" onClick={() => setActiveSection("interactive-tools")}>
              <img src="images/toolkit.png" alt="Tools Icon" className="card-icon" />
              <h2>Interactive Tools</h2>
              <p>Play language games, practice conversation and pronunciation.</p>
            </div>
            <div className="card" onClick={() => setActiveSection("courses")}>
              <img src="images/coursesicon.png" alt="Courses Icon" className="card-icon" />
              <h2>Courses and Lessons</h2>
              <p>Explore grammar, vocabulary, writing, and more.</p>
            </div>
            <div className="card" onClick={() => setActiveSection("resources")}>
              <img src="images/resources.png" alt="Resources Icon" className="card-icon" />
              <h2>Resources</h2>
              <p>Access dictionaries, e-books, infographics, and podcasts.</p>
            </div>
            <div className="card" onClick={() => setActiveSection("progress")}>
              <img src="images/progress.png" alt="Progress Icon" className="card-icon" />
              <h2>Assessment and Progress Tracking</h2>
              <p>Track your learning with quizzes, tests, and certificates.</p>
            </div>
          </div>
        );
    }
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

      {/* Render the dynamic content based on activeSection */}
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
