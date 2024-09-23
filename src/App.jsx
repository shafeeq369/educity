import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from "././Components/Programs/Programs"
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='what we offer'/>
      <Programs/>
      <About/>
      <Title subtitle='Gallery' title='campus photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' title='What student says'/>
      <Testimonial />
      <Title subtitle='Contact us' title='Get in Touch'/>
      <Contact />
      </div>
      
     </div>
  )
}

export default App