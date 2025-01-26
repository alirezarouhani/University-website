import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Fostering Tomorrow's Leaders Today</h2>
        <p> We believe that education extends beyond the classroom. Our vibrant campus offers a rich array of extracurricular activities, leadership opportunities, and global experiences to ensure that every student receives a well-rounded education. From student-run organizations and sports teams to volunteer programs and study-abroad options, there are countless ways to get involved and expand your horizons.</p>
        <p> We are dedicated to fostering a collaborative environment where students not only excel academically but also develop their leadership skills, build lasting relationships, and make a positive impact on their communities.</p>
      </div>
    </div>
  )
}

export default About
