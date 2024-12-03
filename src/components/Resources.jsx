// import React from 'react';

// const Resources = () => {
//   return (
//     <div className="content">
//       <div className="top-bar">
//         <div className="heading">
//           <h1>Learn from the best</h1>
//         </div>
//         <div className="right-section">
//           <button className="upgrade-btn">Upgrade to Premium</button>
//           <div className="profile">
//             <i className="fas fa-user-circle"></i>
//             <span>Profile</span>
//           </div>
//         </div>
//       </div>
//     <div className="interactive-card-container">
//       <div className="card">
//         <h2>Dictionary</h2>
//         <p>Look up words in our extensive dictionary.</p>
//       </div>
//       <div className="card">
//         <h2>E-books</h2>
//         <p>Access a library of e-books to enhance your learning.</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Resources;




////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Dictionary from "./Dictionary";


// const Resources = () => {
//   // State to toggle between main content and dictionary content
//   const [showDictionary, setShowDictionary] = useState(false);


//   const handleDictionaryClick = () => {
//     setShowDictionary(true); // Show Dictionary component when clicked
//   };


//   return (
//     <div className="content">
//       <div className="top-bar">
//         <div className="heading">
//           <h1>Learn from the best</h1>
//         </div>
//         <div className="right-section">
//           <button className="upgrade-btn">Upgrade to Premium</button>
//           <div className="profile">
//             <i className="fas fa-user-circle"></i>
//             <span>Profile</span>
//           </div>
//         </div>
//       </div>


//       <div className="interactive-card-container">
//         {/* If showDictionary is true, render the Dictionary component */}
//         {showDictionary ? (
//           <Dictionary />
//         ) : (
//           <>
//             {/* Main Resources Page with Links */}
//             <Link to="#" className="card" onClick={handleDictionaryClick}>
//               <h2>Dictionary</h2>
//               <p>Look up words in our extensive dictionary.</p>
//             </Link>
//             <div className="card">
//               <h2>E-books</h2>
//               <p>Access a library of e-books to enhance your learning.</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Resources;




//////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link component
// import Dictionary from "./Dictionary";


// const Resources = () => {
//   // State to toggle between main content and dictionary content
//   const [showDictionary, setShowDictionary] = useState(false);


//   const handleDictionaryClick = () => {
//     setShowDictionary(true); // Show Dictionary component when clicked
//   };


//   return (
//     <div className="content">
//       <div className="top-bar">
//         <div className="heading">
//           <h1>Learn from the best</h1>
//         </div>
//         <div className="right-section">
//           <button className="upgrade-btn">Upgrade to Premium</button>
//           <div className="profile">
//             <i className="fas fa-user-circle"></i>
//             <span>Profile</span>
//           </div>
//         </div>
//       </div>


//       <div className="interactive-card-container">
//         {/* If showDictionary is true, render the Dictionary component */}
//         {showDictionary ? (
//           <Dictionary />
//         ) : (
//           <>
//             {/* Main Resources Page with Links */}
//             <Link to="#" className="card" onClick={handleDictionaryClick}>
//               <h2>Dictionary</h2>
//               <p>Look up words in our extensive dictionary.</p>
//             </Link>


//             {/* E-books Card now navigates to the EbooksPage */}
//             <Link to="/ebooks" className="card">
//               <h2>E-books</h2>
//               <p>Access a library of e-books to enhance your learning.</p>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Resources;

////////////////////////////////////////////////////////////////////////////////////////////////////



import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/styles/Resources.css'; // Optional: if you use CSS for Resources

const Resources = () => {
  return (
    <div className="content">
      <div className="top-bar">
        <div className="heading">
          <h1>Learn from the best</h1>
        </div>
        <div className="right-section">
          <div className="profile">
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>
      <div className="interactive-card-container">
        <Link to="dictionary" className="card">
          <h2>Dictionary</h2>
          <p>Look up words in our extensive dictionary.</p>
        </Link>
        <Link to="ebooksPage" className="card">
          <h2>E-books</h2>
          <p>Access a library of e-books to enhance your learning.</p>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
