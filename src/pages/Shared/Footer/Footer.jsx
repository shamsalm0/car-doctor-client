import React from 'react';
import logo from '../../../assets/logo.svg'
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer lg:h-96 flex items-center justify-around w-full  bg-black text-base-content">
  <aside>
    <img className='h-9 w-9 lg:w-20 lg:h-16' src={logo} alt="" />
    <p className='lg:text-lg  text-[#E8E8E8]'>Edwin Diaz is a software and web<br></br> technologies engineer, a life coach<br></br> trainer who is also a serial .</p>
    <div className='flex gap-2'>
    <AiFillGoogleCircle className='w-9 h-9'/>
    <AiFillTwitterCircle className='w-9 h-9'/>
    <FaLinkedin className='w-9 h-9'/>
    <FaInstagram className='w-9 h-9'/>

    </div>
  </aside> 
  <nav>
    <header className="footer-title text-white font-semibold text-xl lg:mb-7">About</header> 
    <Link to='/' className="link link-hover text-white text-base">Home</Link>
    <Link to='/services' className="link link-hover text-white text-base">Service</Link>
    <Link to='contact' className="link link-hover text-white text-base">contact</Link>
    
  </nav> 
  <nav>
  <header className="footer-title text-white font-semibold text-xl lg:mb-7">Company</header> 
    <Link to='/' className="link link-hover text-white text-base">Why Car Doctor</Link>
    <Link to='/about' className="link link-hover text-white text-base">About</Link>
  </nav> 
  <nav>
  <header className="footer-title text-white font-semibold text-xl lg:mb-7">Support</header> 
    <Link to='/' className="link link-hover text-white text-base">Support Center</Link>
    <Link to='/services' className="link link-hover text-white text-base">Feedback</Link>
    <Link to='contact' className="link link-hover text-white text-base">Accessibility</Link>
  </nav>
</footer>
    );
};

export default Footer;