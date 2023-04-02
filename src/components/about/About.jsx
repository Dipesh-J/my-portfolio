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
                <small>6+ months working expierence</small>
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
            "As a recent graduate in web development, I am eager to apply my knowledge and skills to a challenging role in the field. I have gained experience working with backend web technologies during my time at FunctionUp, and I am passionate about building engaging and user-friendly interfaces that meet the needs of today's users. With a solid foundation in HTML, CSS, and JavaScript, and experience in developing responsive websites, I am confident in my ability to contribute to a team of professionals and continue to grow as a developer. I am excited to learn from experienced mentors and contribute my energy and enthusiasm to a company that values innovation and collaboration."

            </p>
           <a href='https://www.linkedin.com/in/dipesh-joshi-341750130'  target='_blank' rel="noreferrer"   className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;