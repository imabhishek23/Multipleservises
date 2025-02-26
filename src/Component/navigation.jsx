import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src/assets/logo.png" alt="Logo" height={100} width={100} />
      </div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-menu">
            <li><a href="#">24/7 Medical Support</a></li>
            <li><a href="#">Home Electrician</a></li>
            <li><a href="#">Car/Bike Services</a></li>
            <li><a href="#">Plumbing</a></li>
          </ul>
        </li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
