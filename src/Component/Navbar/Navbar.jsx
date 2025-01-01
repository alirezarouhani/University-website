import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar(){
  return (
    <div>
      <nav className='container'>
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
