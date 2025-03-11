import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          className="logo"
          src="/assets/WhatsApp Image 2025-02-20 at 10.41.53_47cb4832.jpg"
          alt=""
        />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/programs" onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

