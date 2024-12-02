import React from 'react';
import "../assets/styles/Profile.css";

const Profile = () => {
  // Simulated user data
  const user = {
    name: 'Aman kumar',
    email: 'Amankumar@gmail.com',
    coursesCompleted: 5,
    avatar: 'https://www.w3schools.com/w3images/avatar2.png', // Placeholder avatar
    totalWordsPracticed: 1500,
    badges: ['Grammar Guru', 'Fluent Speaker'], // Example badges
    currentCourse: 'Advanced Pronunciation Techniques',
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.avatar} alt="Profile Avatar" className="profile-avatar" />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>

      <div className="profile-info">
        <h2>Learning Progress</h2>
        <p><strong>Courses Completed:</strong> {user.coursesCompleted}</p>
        <p><strong>Total Words Practiced:</strong> {user.totalWordsPracticed}</p>
        <p><strong>Currently Learning:</strong> {user.currentCourse}</p>

        <div className="badges-container">
          <h3>Your Achievements</h3>
          <div className="badges">
            {user.badges.map((badge, index) => (
              <span key={index} className="badge">{badge}</span>
            ))}
          </div>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
