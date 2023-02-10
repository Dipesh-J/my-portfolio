import React from 'react'
import './header.css'
import CTA from './CTA'
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
      </div>
    </header>
  )
}

export default Header