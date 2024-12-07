import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-broadcast-tower"></i> GramAi
      </div>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/features" activeClassName="active">Features</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink className="join-now" to="/login" activeClassName="active">
          Join Now
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;