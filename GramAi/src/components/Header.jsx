import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-broadcast-tower"></i> GramAi
      </div>
      <nav>
        <Link to="/">Home</Link>          {/* Use Link instead of a */}
        <Link to="/about">About</Link>    {/* Link to About */}
        <Link to="/features">Features</Link>  {/* Link to Features */}
        <Link to="/contact">Contact</Link>    {/* Link to Contact */}
        <Link className="join-now" to="/dashboard">Join Now</Link> {/* Link to dashboard */}
      </nav>
    </header>
  );
};

export default Header;
