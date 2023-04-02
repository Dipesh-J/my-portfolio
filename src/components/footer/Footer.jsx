import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

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
            <FaCode />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
