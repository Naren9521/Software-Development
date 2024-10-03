// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <i className="fas fa-broadcast-tower"></i> GramAi
//       </div>
//       <nav>
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Features</a>
//         <a href="#">Contact</a>
//         <a className="join-now" href="/dashboard">Join Now</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

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


// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <i className="fas fa-broadcast-tower"></i> GramAi
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/">About</Link>
//         <Link to="/">Features</Link>
//         <Link to="/">Contact</Link>
//         <Link className="join-now" to="/dashboard">Join Now</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
