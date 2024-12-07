import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/dashboard.css";
import resourcesIcon from '/assets/images/resources.png';
import progressIcon from '/assets/images/progress.png';
import toolsIcon from '/assets/images/toolkit.png'
const DashboardContent = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
    setIsEditing(false); // Exit edit mode if the profile section is closed
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic can be added here (e.g., API call to update profile)
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
      {isProfileOpen && (
        <div className="profile-section">
          <h2>Your Profile</h2>
          <p>View and edit your personal details.</p>
          <ul>
            <li>
              <span>Name: </span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileDetails.name}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileDetails.name}</span>
              )}
            </li>
            <li>
              <span>Email: </span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileDetails.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileDetails.email}</span>
              )}
            </li>
            <li>
              {isEditing ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={handleEditToggle}>Edit Profile</button>
              )}
            </li>
            <li><Link to="/login">Logout</Link></li>
          </ul>
          {/* Close Button */}
          <button onClick={() => setProfileOpen(false)} className="close-button">
            Close
          </button>
        </div>
      )}

      {/* Card Container */}
      <div className="card-container">
        <div className="card">
          <Link to="interactive-tools">
            <img src={toolsIcon} alt="Tools Icon" className="card-icon" />
            <h2>Interactive Tools</h2>
            <p>Play language games, practice conversation and pronunciation.</p>
          </Link>
        </div>
        <div className="card">
          <Link to="resources">
            <img src={resourcesIcon} alt="Resources Icon" className="card-icon" />
            <h2>Resources</h2>
            <p>Access dictionaries, e-books, infographics, and podcasts.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
