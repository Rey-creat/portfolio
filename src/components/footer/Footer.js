import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="portfoliotext">
        <p>© 2024 React - Portfolio</p>
      </div>

      <div className="line">
        <p>|</p>
      </div>

      <div className="footernavlinks">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>

      <div className="footernavbutton">
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://steamcommunity.com/id/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Steam">
              <i className="fab fa-steam"></i>
            </a>

      </div>
    </footer>
  );
};

export default Footer;
