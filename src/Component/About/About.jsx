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
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab facilis provident, cupiditate nisi quas similique. Qui, obcaecati. Perferendis, voluptates iste. Totam assumenda nam rem minima voluptatibus non dolore dolor vel.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quod deleniti nostrum provident aliquam pariatur numquam nesciunt officiis earum unde ullam ducimus, amet minus debitis et commodi facere dicta laboriosam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero provident dolore numquam, nam maiores asperiores ullam soluta. Eaque culpa minus aut exercitationem veniam dolorum maiores eligendi alias numquam itaque!
        Quidem laboriosam impedit magni, distinctio corporis dolorem facilis alias eius? Voluptatibus accusantium voluptates beatae quaerat ratione nobis vel nisi praesentium omnis illo atque, totam, asperiores id inventore voluptas corrupti eaque.</p>
      </div>
    </div>
  )
}

export default About
