import React, { useState } from "react";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Nav() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <Link
          to="container header__container"
          className="navbar-logo"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          My Portfolio
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="about"
              className="nav-links"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experience"
              className="nav-links"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              className="nav-links"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-links"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;