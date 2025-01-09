import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import {Link} from 'react-scroll'


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
                <Title subtitle='Contact Us' title='Have Questions?'/>
                <Contact />
                <Footer />
        </div>
    </>
  )
}

export default App
