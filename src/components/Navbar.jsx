import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>City Hospital</h2>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
