import React from "react";
import "./about.css";
import dipesh from "../../assets/dipesh.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dipesh} alt="Dipesh Joshi" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ years of working experience</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Back-end Projects</h5>
                <small>5+ completed</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Front-end Projects</h5>
                <small>2+ completed</small>
              </article>
            </div>
            <p>
            "Backend Developer with 2+ years of experience in Node.js, Express, JavaScript, AWS, and multi-database systems. Built scalable backend architectures, AI-driven workflows, and production-grade automations used by global enterprise clients. Delivered POCs for Clevertap, media.net, and Swiggy, improving development speed and reducing configuration overhead. Known for adaptability, rapid learning, and strong communication backed by consistent high performance and multiple awards."
            </p>
           <a href='https://www.linkedin.com/in/dipesh-joshi-341750130'  target='_blank' rel="noreferrer"   className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;
