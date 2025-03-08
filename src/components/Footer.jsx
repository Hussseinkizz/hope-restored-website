// import React from "react";
// import "../styles/footer.css"; // Styles for the footer

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <p>&copy; {new Date().getFullYear()} HOPE RESTORED. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from "@mui/icons-material";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand and Description */}
        <div className="footer-brand">
          <h2>HOPE RESTORED</h2>
          <p>Empowering communities through education, healthcare, and skills training.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><Email /> info@hoperestored.org</p>
          <p><Phone /> +256 123 456 789</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HOPE RESTORED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

