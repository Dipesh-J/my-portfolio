import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/WIN_20230130_00_35_56_Pro.jpg';
import HeaderSocials from './HeaderSocials';
// import Me from "../../assets/self.jpg"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='intro'>Hello I'm </h5>
        <h1>Dipesh Joshi</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='me' 
          width='200' height='300'
           />
        </div>
        <a href='#contact' className='scroll_down'>
          <i className='fas fa-chevron-down'></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
