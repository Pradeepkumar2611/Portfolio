import React from 'react';
import '../assets/Styles/Header.css';
import resumePDF from '../assets/Documents/Pradeep_resume.pdf';

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pradeepkumar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={handleDownload} className="download-btn">
          Download CV
        </button>
      </nav>
    </header>
  );
};

export default Header;