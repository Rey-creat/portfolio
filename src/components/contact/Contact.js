import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-us">
      <h1>CONTACT US</h1>
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Email: <a href="rey.rico@lccbonline.edu.ph">rey.rico@lccbonline.edu.ph</a></p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>Phone: <a href="tel:+0930 584 3503">+0930 584 3503</a></p>
          </div>
          <div className="social-media">
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
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
            </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
