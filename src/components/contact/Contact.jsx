import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm("service_vphk89y", "template_d7mdwzj", form.current, '7hAU9wjb91v1Zkb_k')
  };

  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className='container contact__container'>
<div className='contact__options'>
<article className='contact__option'>
  <MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>dipeshjoshi015@gmail.com</h5>
<a href="mailto:dipeshjoshi015@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
</article>

</div>
<form ref={form} onSubmit={sendEmail}>
  <input type='text' name='name' placeholder='Your Full Name' required />
  <input type='email' name='email' placeholder='Your Email' required />
  <textarea  name='message' rows='7' placeholder='Your Message' required ></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
  <br/>
</form>
</div>
    </section>
  )
}

export default Contact