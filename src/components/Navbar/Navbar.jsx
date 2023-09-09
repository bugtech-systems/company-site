import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Spaceo-Logo-Dark-Green.svg";

import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* <div className="nav-logo">Your Logo</div> */}
      <div className="nav-logo">
        <img src={Logo} alt="Your SVG" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <span>Company <RiArrowDropDownFill /> </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/option1">Option 1</a>
              </li>
              <li>
                <a href="/option2">Option 2</a>
              </li>
              <li>
                <a href="/option3">Option 3</a>
              </li>
            <div className="option2">
            <li >
                <a href="/option1">Option 1</a>
              </li>
              <li>
                <a href="/option2">Option 2</a>
              </li>
              <li>
                <a href="/option3">Option 3</a>
              </li>
            </div>
            </ul>
          )}
        </li>
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <span>We Offer <RiArrowDropDownFill /> </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/option1">Option 1</a>
              </li>
              <li>
                <a href="/option2">Option 2</a>
              </li>
              <li>
                <a href="/option3">Option 3</a>
              </li>
            </ul>
          )}
        </li> 
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <span>Our Work <RiArrowDropDownFill /></span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/option1">Option 1</a>
              </li>
              <li>
                <a href="/option2">Option 2</a>
              </li>
              <li>
                <a href="/option3">Option 3</a>
              </li>
            </ul>
          )}
        </li> 
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <span>Resources <RiArrowDropDownFill /></span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/option1">Option 1</a>
              </li>
              <li>
                <a href="/option2">Option 2</a>
              </li>
              <li>
                <a href="/option3">Option 3</a>
              </li>
            </ul>
          )}
        </li> 
        <li className="nav-item">
          <a href="/contact">App Cost Calculator</a>
        </li>

        <div className="contact-button">
        <a href="/contact">Contact Us</a>
      </div>
      </ul>
    </nav>
  );
};

export default Navbar;