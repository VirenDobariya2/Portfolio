import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoReorderThreeOutline } from "react-icons/io5";
// import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                className="menu-item"
                smooth={true}
                offset={-100}
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
                offset={-100}
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
                Work Experience
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
                Contact Me
              </Link>
            </li>
            
          </ul>
          <div className="menu">
            <a
              href="./assets/Images/VIREN_DOBARIYAR_RESUME.pdf"
              download="VIREN_DOBARIYAR_RESUME.pdf"
              style={{ textDecoration: "none" }}
            >
              <button className="contact-btn">Resume</button>
            </a>
          </div>

          <button className="menu-btn" onClick={toggleMenu}>
            <IoReorderThreeOutline style={{ fontSize: "1.8rem" }} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
