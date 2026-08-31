function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-icon">S</span>
          <span>Umendra Bhati</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#architecture">Architecture</a>
          <a href="#automation">Automation</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </div>
    </nav>
  );
}

export default Navbar;