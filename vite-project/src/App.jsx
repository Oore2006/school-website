import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Home/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
// import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
     <>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our PROGRAM" title="What we offer"/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Students Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>
     

    </>
  )
}

export default App
