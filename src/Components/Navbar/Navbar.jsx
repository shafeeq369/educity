import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import "./Navbar.css"
import logo from '../../assets/logo.png'

const Navbar = () => {
  const[sticky,setsticky]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
       window.scrollY > 60 ?  setsticky(true): setsticky(false);
    })
  },[]);
  return (
    <nav className={`container  ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="" className='navbar__logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li> <Link to='contact' smooth={true} offset={-150} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar