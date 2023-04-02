import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode, SiGmail} from "react-icons/si"


function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__logo">
          <h3>My Portfolio</h3>
          <p>Created by Me © 2023</p>
        </div>
        <div className="footer__icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:dipeshjoshi015@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
