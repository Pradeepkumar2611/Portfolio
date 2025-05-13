import React from 'react';
import '../assets/Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pradeep. All rights reserved.</p>
    </footer>
  );
};

export default Footer;