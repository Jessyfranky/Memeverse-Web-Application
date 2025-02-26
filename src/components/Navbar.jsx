import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MemeVerse
        </Link>
        <div className="navbar-links">
          <Link to="/explorer" className="nav-link">Explorer</Link>
          <Link to="/upload" className="nav-link">Upload</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn" title="Toggle Dark Mode">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="toggle-icon" viewBox="0 0 24 24">
              <path d="M12 4.354a7.646 7.646 0 100 15.292 7.646 7.646 0 000-15.292zM12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="toggle-icon" viewBox="0 0 24 24">
              <path d="M21.64 13.24a1 1 0 00-.91-.63h-2.26a1 1 0 00-.95.68 6.98 6.98 0 01-7.34 4.68 7 7 0 01-4.68-7 1 1 0 00-.68-.95V4.27a1 1 0 00-.63-.91A9.001 9.001 0 0012 21a9 9 0 009.64-7.76z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
