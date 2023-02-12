import React from 'react'
import './header.css'
import CTA from './CTA'
import WIN_20230130_00_35_56_Pro from '../../assets/WIN_20230130_00_35_56_Pro.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    // <div>
    //     <h4> Hi I'm </h4>
    //     <h1> Dipesh Joshi </h1>
    //     <p> The luckiest man alive..❤</p>
    // </div>
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Dipesh Joshi</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={WIN_20230130_00_35_56_Pro} alt='me'/>

        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header