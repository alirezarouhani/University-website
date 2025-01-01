import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure a  better education for a better world</h1>
        <p>Our world-class faculty, innovative programs, and vibrant campus 
                community provide an unparalleled educational experience. 
                 Join us and unlock your full potential</p>
                 <button className='btn'>Explore more <img src={darkArrow}></img></button>
      </div>
    </div>
  )
}

export default Hero
