import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__logo">
          
        <Link
          to="container header__container"
          className="navbar-logo"
          smooth={true}
          duration={500}
          // onClick={closeMobileMenu}
        >
          <h3>My Portfolio</h3>
        </Link>
          
          <p>Created by Me © 2025</p>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/Dipesh-J"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/Dipeshjoshi015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/dipesh-joshi-341750130/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dipeshjoshi015@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
