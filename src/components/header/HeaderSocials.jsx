import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiLeetcode} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/dipesh-joshi-341750130/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Dipesh-J' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://leetcode.com/Dipeshjoshi015/' target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  )
}


export default HeaderSocials