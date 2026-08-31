import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="logo-icon">S</span>
            <span>Umendra Bhati</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop Connect Button */}
          <a href="#contact" className="nav-button">
            Let's Connect
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#project" onClick={closeMenu}>
            Project
          </a>

          <a href="#architecture" onClick={closeMenu}>
            Architecture
          </a>

          <a href="#automation" onClick={closeMenu}>
            Automation
          </a>

          <a href="#dashboard" onClick={closeMenu}>
            Dashboard
          </a>

          <a href="#security" onClick={closeMenu}>
            Security
          </a>

          <a href="#contact" className="mobile-connect-button" onClick={closeMenu}>
            Let's Connect
          </a>

        </div>
      </nav>
    </>
  );
}

export default Navbar;