import React from 'react'
import './Hero.css'
// import program from '../../assets/program.jpg'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1> We Ensure  better  education for a better World</h1>
          <p> Our cutting-edge curriculum is designed to empower students 
              with the knowledeg, skills, and experiences needed to excel in 
              the dynamic field of education  </p>
              <button className='btn'>Explore more <img src= {arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero