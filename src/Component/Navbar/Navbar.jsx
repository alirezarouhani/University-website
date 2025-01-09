import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll' // npm list react-scroll    --run in terminal to check if it is installed

function Navbar(){

        // let isNavTrans = false;
        const [isNavTrans, setNavBool] = useState(false);
        useEffect(()=>{
                window.addEventListener('scroll', ()=>{
                        // window.scrollY > 70 ? setNavBool(true) : setNavBool(false);
                        if(window.scrollY > 70){
                                setNavBool(true);
                        }else{
                                setNavBool(false);   
                        }
                }) 
        }, [])
  return (
    <div>
      <nav className= {`container ${isNavTrans ? 'dark-nav' : '' }`}>
        <img src= {logo} alt="logo" className='logo'/>
        <ul>

            <li><Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" spy={true} smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li><Link to="campus" spy={true} smooth={true} offset={-280} duration={500}>Compus</Link></li>
            <li><Link to="testimonials" spy={true} smooth={true} offset={-280} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-280} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
