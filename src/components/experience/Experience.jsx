import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import {
  SiMongodb,
  SiReact,
  SiExpress,
  SiLeetcode,
  SiPostman,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

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
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>React(Basics)</h4>
                <small className="text-light">Intermediate</small>
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
            <DiJavascript1 />
          </article>
          <article className="experience__icons">
            <DiNodejs />
          </article>
          <article className="experience__icons">
            <SiExpress />
          </article>
          <article className="experience__icons">
            <SiMongodb />
          </article>
          <article className="experience__icons">
            <SiReact />
          </article>
          <article className="experience__icons">
            <FaGitAlt />
          </article>
          <article className="experience__icons">
            <SiLeetcode />
          </article>
          <article className="experience__icons">
            <SiPostman />
          </article>
        </div>
      </div>
    </section>
  );
}

export default experience;

// import React from "react";
// import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
// import { DiJavascript1,DiNodejs } from "react-icons/di";
// import {  SiMongodb, SiReact,SiExpress } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa";

// function experience() {
//   return (
//     <section id="experience">
//       <h5>What Skills I Have</h5>
//       <h2>My Strengths</h2>

//       <div className="container experience__container">
//         <div className="experience__backend">
//           <h3>Technology Used</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <DiJavascript1 className="experience__icon" />
//               <div>
//                 <h4>JavaScript</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <DiNodejs className="experience__icon" />
//               <div>
//                 <h4>Node.js</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiExpress className="experience__icon" />
//               <div>
//                 <h4>Express.js</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiMongodb className="experience__icon" />
//               <div>
//                 <h4>MongoDB</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiReact className="experience__icon" />
//               <div>
//                 <h4>React</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <FaGitAlt className="experience__icon" />
//               <div>
//                 <h4>Git</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default experience;
