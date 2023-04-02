import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Projects from './components/projects/Projects';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Nav/>
      <br/>
      <Header/>
      <br/>
      <About/>
      <Experience/>
      <Projects/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>

    )
}

export default App