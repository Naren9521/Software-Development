const Footer = () => {
    return (
      <div className="footer">
        <div className="logo">
          <i className="fas fa-broadcast-tower"></i> GramAi
          <p>© 2024 GramAi, Inc. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Footer;
  