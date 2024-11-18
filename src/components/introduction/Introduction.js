// src/components/introduction/Introduction.js
import React from 'react';
import './Introduction.css'; // Your specific styles for the Introduction component
import avatar from '../images/profile.png'; // Correct path to the avatar image

const Introduction = () => {
  return (
    <div className="introduction" id="home"> {/* Added id here */}
      <div className="introduction-content">
        <p>Hi, I'm</p>
        <h1>Rey Rico</h1>
        <p>
          <span className="frontend-text">
            <span className="text-part">
              <span className="letter" style={{ '--i': 0 }}>F</span>
              <span className="letter" style={{ '--i': 1 }}>R</span>
              <span className="letter" style={{ '--i': 2 }}>O</span>
              <span className="letter" style={{ '--i': 3 }}>N</span>
              <span className="letter" style={{ '--i': 4 }}>T</span>
            </span>
            <span className="segment-gap"></span> {/* Gap between "Front" and "End" */}
            <span className="text-part">
              <span className="letter" style={{ '--i': 5 }}>E</span>
              <span className="letter" style={{ '--i': 6 }}>N</span>
              <span className="letter" style={{ '--i': 7 }}>D</span>
            </span>
            <span className="segment-gap"></span> {/* Gap between "End" and "Developer" */}
            <span className="text-part">
              <span className="letter" style={{ '--i': 8 }}>D</span>
              <span className="letter" style={{ '--i': 9 }}>E</span>
              <span className="letter" style={{ '--i': 10 }}>V</span>
              <span className="letter" style={{ '--i': 11 }}>E</span>
              <span className="letter" style={{ '--i': 12 }}>L</span>
              <span className="letter" style={{ '--i': 13 }}>O</span>
              <span className="letter" style={{ '--i': 14 }}>P</span>
              <span className="letter" style={{ '--i': 15 }}>E</span>
              <span className="letter" style={{ '--i': 16 }}>R</span>
            </span>
          </span>
        </p>
        <button className="more-button hire">HIRE ME</button> 
        <button className="more-button explore">EXPLORE MORE</button> 
      </div>
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default Introduction;
