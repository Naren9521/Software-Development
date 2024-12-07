import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>GramAi</h1>
      <NavLink to="/dashboard" className="nav-item">
        <i className="fas fa-home"></i> Home
      </NavLink>
      <NavLink to="/dashboard/interactive-tools" className="nav-item">
          <i className="fas fa-tools"></i> Tools
      </NavLink>
      <NavLink to="/dashboard/resources" className="nav-item">
        <i className="fas fa-book"></i> Resources
      </NavLink>
      <NavLink to="/login" className="logout">
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;