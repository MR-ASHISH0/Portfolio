import React from 'react';
import { useTheme } from '../../ThemeProvider';


const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header className={`header ${theme}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo nav-link">Ashish Saini </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link"><i className="fa-solid fa-house nav-icon" /> Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link"><i className="fa-solid fa-user nav-icon" /> About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link"><i className="fa-solid fa-file nav-icon" /> Skills</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link"><i className="fa-solid fa-briefcase nav-icon" /> Services</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link"><i className="fa-solid fa-image nav-icon" /> Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link"><i className="fa-solid fa-message nav-icon" /> Contact</a>
            </li>
          </ul>
          <i className="fa-solid fa-xmark nav-close" id="nav-close" />
        </div>
        <div className="nav-btns">
          {/* theme btn */}
          <button onClick={handleThemeChange} className="change-theme">
            {theme === 'light' ? <i className="fa-regular fa-moon" /> : <i className="fa-regular fa-sun" />}
          </button>
          <div className="nav-toggle" id="nav-toggle">
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
