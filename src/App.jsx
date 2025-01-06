import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import StateTest from './Component/StateTest'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'


function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
        <div className="container">
                <Title subtitle='Our Program' title='What We Offer'/>
                <Programs/>
                <About/>
                <Title subtitle='Gallary' title='Campus Photos'/>
                <Campus />
                <Title subtitle='Testimonials' title='What Our Students Think'/>
                <Testimonials />
        </div>
    </>
  )
}

export default App
