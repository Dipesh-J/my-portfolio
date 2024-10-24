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
                <small>1.5+ years of working expierence</small>
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
            "As an experienced software developer, I specialize in backend technologies and have worked on diverse projects that integrate APIs, databases, and client requirements. My time at FunctionUp and DronaHQ has provided me with hands-on experience working with technologies such as Node.js, MongoDB, MySQL, and more, alongside global clients like Clevertap, media.net, and United Finance Bank. I have also contributed to multiple client POCs by building custom React controls and API integrations.

With a passion for problem-solving and building scalable, user-focused applications, I continually seek new challenges that push me to innovate and grow. I thrive in collaborative, fast-paced environments where adaptability, communication, and a curiosity for deep understanding drive success. I'm eager to bring my technical expertise and enthusiasm to a dynamic team that values creativity and forward-thinking solutions."

            </p>
           <a href='https://www.linkedin.com/in/dipesh-joshi-341750130'  target='_blank' rel="noreferrer"   className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;
