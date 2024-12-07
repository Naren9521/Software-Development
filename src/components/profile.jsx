import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/dashboard.css";

const Profile = ({ onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

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
    // Add save logic (e.g., API call to save profile data)
  };

  return (
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
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
