// src/components/header/Header.js
import React, { useState } from 'react';
import './Header.css'; // Your specific styles for the Header component
import image1 from '../images/logo.png'; // Correct path to the image

const Header = () => {
  const [activeLink, setActiveLink] = useState('HOME');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="logo">
        <img src={image1} alt="Image 1" />
      </div>
      <nav>
        <div className="navlinks">
          <ul>
            <li>
              <a 
                href="#" 
                className={activeLink === 'HOME' ? 'active' : ''} 
                onClick={() => handleClick('HOME')}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeLink === 'ABOUT' ? 'active' : ''} 
                onClick={() => handleClick('ABOUT')}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeLink === 'PROJECTS' ? 'active' : ''} 
                onClick={() => handleClick('PROJECTS')}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeLink === 'CONTACT' ? 'active' : ''} 
                onClick={() => handleClick('CONTACT')}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="navbutton">
          <button>HIRE ME</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
