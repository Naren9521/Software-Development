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
        <a href="#">Contact</a>
        <a className="join-now" href="/dashboard">Join Now</a>
      </nav>
    </header>
  );
};

export default Header;
