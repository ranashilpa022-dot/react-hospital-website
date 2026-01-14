import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h2>City Hospital</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
