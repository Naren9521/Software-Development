import React, { useState } from 'react';
import '../assets/styles/EbooksPage.css';

// import React, { useState } from 'react';
// import './EbooksPage.css'; // Keep specific styles scoped to this page

const EbooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(null); // State to track hovered book

  const books = [
    { name: 'Ikigai', image: '/images/ikigai.jpg', pdfUrl: '/pdf/ikigai.pdf' },
    { name: 'The Art of Happiness', image: '/images/happiness.jpg', pdfUrl: '/pdf/art_of_happiness.pdf' },
    { name: 'Anne Frank', image: '/images/anne.jpg', pdfUrl: '/pdf/anne_frank.pdf' },
    { name: 'The Conch Bearer', image: '/images/bearer.jpg', pdfUrl: '/pdf/conch_bearer.pdf' },
    { name: 'The Alchemist', image: '/images/alchemist.jpg', pdfUrl: '/pdf/alchemist.pdf' },
    { name: '12 rules for life', image: '/images/rules_12.jpg', pdfUrl: '/pdf/rules_12.pdf' },
  ];

  const handleBookClick = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = true;
    link.click();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/get-summary?book=${searchTerm}`);
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      setSummary('Error fetching summary');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content"> {/* Reused global wrapper */}
      {/* Global top bar */}
      <div className="top-bar">
        <div className="heading">
          <h1>Explore and Learn</h1>
        </div>
        <div className="right-section">
          <button className="upgrade-btn">Upgrade to Premium</button>
          <div className="profile">
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Page-specific content */}
      <div className="ebooks-content">
        <div className="search-container">
          <h2>Want a summary of any specific book? Type the book name in the search bar and press Enter.</h2>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter book name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        {summary ? (
          <div className="summary-container">
            <button className="back-button" onClick={() => setSummary('')}>Back</button>
            <h3>Summary of {searchTerm}</h3>
            {loading ? <p>Loading...</p> : <p>{summary}</p>}
          </div>
        ) : (
          <div className="books-grid">
            {books.map((book, index) => (
              <div
                className="book-item"
                key={index}
                onMouseEnter={() => setHoveredBook(book.name)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className={`book-image ${hoveredBook === book.name ? 'hovered' : ''}`}
                  onClick={() => handleBookClick(book.pdfUrl)}
                />
                {hoveredBook === book.name && (
                  <div className="download-pdf-message">Download PDF</div>
                )}
                <p>{book.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EbooksPage;
