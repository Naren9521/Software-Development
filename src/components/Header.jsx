const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-broadcast-tower"></i> GramAi
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="/contact">Contact</a>
        <a className="join-now" href="/login">Join Now</a> {/* Update to navigate to /login */}
      </nav>
    </header>
  );
};

export default Header;
