// src/Components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBoxOpen, FaHandshake } from 'react-icons/fa'; // Importing Font Awesome icons
import './NavBar.css'; // Import CSS for styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link kodchasan-regular">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link kodchasan-regular">
            <FaUsers className="nav-icon" /> Our Team
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link kodchasan-regular">
            <FaBoxOpen className="nav-icon" /> Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/partners" className="nav-link kodchasan-regular">
            <FaHandshake className="nav-icon" /> Our Partners
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
