import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'

function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
        <div className="container">
                <Title subtitle='Our Program' title='What We Offer'/>
                <Programs/>
                <About/>
        </div>
       
    </>
  )
}

export default App
