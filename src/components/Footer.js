import React from 'react';
import '../assets/Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} You Pradeep. All rights reserved.</p>
    </footer>
  );
};

export default Footer;