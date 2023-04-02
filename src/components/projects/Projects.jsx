import React from "react";
import "./projects.css";
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.jpg'
// import IMG6 from '../../assets/project6.jpg'

//
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Blogging-Site",
    github: "https://github.com/Dipesh-J/Project-Blogging-Site",
  },
  {
    id: 2,
    image: IMG2,
    title: "Open-to-Intern",
    github: "https://github.com/Dipesh-J/Project-Open-to-Intern",
  },
  {
    id: 3,
    image: IMG3,
    title: "BooksManagement",
    github: "https://github.com/Dipesh-J/Project-Books-Management",
  },
  {
    id: 4,
    image: IMG4,
    title: "Url-Shortner",
    github: "https://github.com/Dipesh-J/project-url-shortner",
  },
  {
    id: 5,
    image: IMG5,
    title: "Ecommerce-Website",
    github: "https://github.com/Dipesh-J/Project-Ecommerce-Website",
  },
  {
    id: 6,
    // image: IMG6,
    title: "Crypto-Currency",
    github: "https://github.com/1siikaa/blockchainProject",
  },

];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Back-end Projects</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <a href={github} target="_blank" rel="noreferrer">
                <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
