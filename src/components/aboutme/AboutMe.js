import React from 'react';
import './AboutMe.css'; // Import the styles for the About Me component
import aboutMeImage from '../images/about.png'; // Correct path to your image

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-image">
        <img src={aboutMeImage} alt="About Me" />
      </div>
      <div className="about-me-text">
        <section id="about-me">
          <h2>About Me</h2>
        </section>

        <p>
          I’m a third-year IT student and designer with a passion for combining technology and aesthetics. I’m dedicated to crafting innovative solutions and creating user-friendly designs. When I'm not studying or designing, I enjoy exploring new tech trends and working on personal projects.
        </p>
        
        <div className="about-me-details">
          <div className="about-me-detail">
            <h3>Skills</h3>
            <p>
              Web Developer HTML, CSS, JavaScript, React<br />
            </p>
          </div>

          <div className="about-me-detail">
            <h3>Education</h3>
            <p>
              B.S. in Information Technology (3rd Year College)<br />
            </p>
          </div>

          <div className="about-me-detail">
            <h3>Experience</h3>
            <p>
              In designing web applications using PHP and Java.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
