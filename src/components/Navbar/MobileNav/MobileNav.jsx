import React from "react";
import "./mobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="logo">
          <img src="./assets/Images/viren.jpg" alt="img" />
          </div>
          <div className="menu-name">
          <span>VIREN DOBARIYA</span>
          <br/>
          </div>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                className="menu-item"
                smooth={true}
                offset={-50}
                duration={500}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                className="menu-item"
                smooth={true}
                offset={-50}
                duration={500}
                spy={true}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="workexperience"
                className="menu-item"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
              >
                Work-Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="project"
                className="menu-item"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contactme"
                className="menu-item"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
              >
                Contact-Me
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default MobileNav;
