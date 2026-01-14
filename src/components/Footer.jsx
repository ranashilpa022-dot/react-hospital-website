import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Hospital Info */}
        <div className="footer-column">
          <h3>City Hospital</h3>
          <p>
            City Hospital is a multi-specialty healthcare center providing
            advanced medical treatment, experienced doctors, and compassionate
            care — available 24/7.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>📍 Jabalpur, Madhya Pradesh</p>
          <p>📞 +91 7879448719</p>
          <p>📧 info@cityhospital.com</p>
          <p>⏰ Emergency: 24/7</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} City Hospital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
