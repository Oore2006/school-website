import {React , useState} from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Home/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import Campus from './Components/Campus/Campus.jsx'
import About from './Components/About/About.jsx';

import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';

const App = () => {
  // const [count, setCount] = useState(0)

   const [ playState, setPlayState] = useState(false);
  return (
     <>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our PROGRAM" title="What we offer"/>
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Students Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
    </>
  )
}

export default App
