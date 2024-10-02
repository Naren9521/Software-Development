const DashboardContent = () => {
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
            <img src="images/toolkit.png" alt="Tools Icon" className="card-icon" />
            <h2>Interactive Tools</h2>
            <p>Play language games, practice conversation and pronunciation.</p>
          </div>
          <div className="card">
            <img src="images/coursesicon.png" alt="Courses Icon" className="card-icon" />
            <h2>Courses and Lessons</h2>
            <p>Explore grammar, vocabulary, writing, and more.</p>
          </div>
          <div className="card">
            <img src="images/resources.png" alt="Resources Icon" className="card-icon" />
            <h2>Resources</h2>
            <p>Access dictionaries, e-books, infographics, and podcasts.</p>
          </div>
          <div className="card">
            <img src="images/progress.png" alt="Progress Icon" className="card-icon" />
            <h2>Assessment and Progress Tracking</h2>
            <p>Track your learning with quizzes, tests, and certificates.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardContent;
  