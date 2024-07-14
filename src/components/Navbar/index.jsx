import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ theme = "dark" }) => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const closeDropdowns = () => {
    setDropdown1Open(false);
    setDropdown2Open(false);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">
        <span className="navbar-brand-text">My App</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleDropdown1}>
            Dropdown 1
          </a>
          {dropdown1Open && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Option 1</li>
              <li className="dropdown-item">Option 2</li>
              <li className="dropdown-item">Option 3</li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleDropdown2}>
            Dropdown 2
          </a>
          {dropdown2Open && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Option A</li>
              <li className="dropdown-item">Option B</li>
              <li className="dropdown-item">Option C</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
