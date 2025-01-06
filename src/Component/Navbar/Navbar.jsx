import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

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
            <li><a className="" href="">Home</a></li>
            <li>Program</li>
            <li>About us</li>
            <li>Compus</li>
            <li>Testemonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
