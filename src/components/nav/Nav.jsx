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
          to="home"
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
              to="portfolio"
              className="nav-links"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Portfolio
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

// export default Nav;
// import React, { useState } from "react";
// import "./nav.css";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <div className="navbar__logo">
//           <a href="/">Portfolio</a>
//         </div>
//         <div className="navbar__menu-icon" onClick={handleToggle}>
//           {isOpen ? <AiOutlineClose /> : <FaBars />}
//         </div>
//         <ul className={isOpen ? "navbar__menu active" : "navbar__menu"}>
//           <li className="navbar__item">
//             <a href="#about" className="navbar__links" onClick={handleToggle}>
//               About
//             </a>
//           </li>
//           <li className="navbar__item">
//             <a href="#experience" className="navbar__links" onClick={handleToggle}>
//               Experience
//             </a>
//           </li>
//           <li className="navbar__item">
//             <a href="#projects" className="navbar__links" onClick={handleToggle}>
//               Projects
//             </a>
//           </li>
//           <li className="navbar__item">
//             <a href="#contact" className="navbar__links" onClick={handleToggle}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default Nav;
