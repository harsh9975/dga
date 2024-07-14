import React, { useState } from "react";
import "./Navbar.css";
import Button from "../Buttons";
import { Link } from "react-router-dom";
import Textfield from "../Textfield";

const Navbar = ({ theme = "light" }) => {
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
      <div className="navbar-brand" style={{ width: "20vw" }}>
        <span className="navbar-brand-text">Logo</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">
            <Textfield type="h5">Home</Textfield>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <Textfield type="h5">About Us</Textfield>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/courses">
            <Textfield type="h5">Courses</Textfield>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs">
            <Textfield type="h5">Blogs</Textfield>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <Textfield type="h5">Contact Us</Textfield>
          </Link>
        </li>
      </ul>
      <div className="navbar-brand" style={{ width: "17vw" }}>
        <Button type="allBlue">Book a free demo class</Button>
      </div>
    </nav>
  );
};

export default Navbar;
