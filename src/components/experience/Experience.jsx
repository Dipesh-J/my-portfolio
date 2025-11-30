import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { DiJavascript1, DiNodejs, DiPython } from "react-icons/di";
import {
  SiMongodb,
  SiReact,
  SiExpress,
  SiLeetcode,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiOpenai,
} from "react-icons/si";
import { FaGitAlt, FaAws } from "react-icons/fa";

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Strengths</h2>

      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Technology Used</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Redis</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>AWS (EC2, S3)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>AI Tools</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>DSA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="icons">
          <article className="experience__icons">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiJavascript1 />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://nodejs.dev/en/learn/introduction-to-nodejs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiNodejs />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiExpress />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiPython />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.mongodb.com/docs/atlas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMongodb />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPostgresql />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMysql />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://redis.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiRedis />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAws />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiDocker />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiReact />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitAlt />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://openai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiOpenai />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://leetcode.com/Dipeshjoshi015/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </article>
          <article className="experience__icons">
            <a
              href="https://www.postman.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPostman />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default experience;
