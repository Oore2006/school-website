import React from 'react'
import './About.css'
import  books from '../../assets/books.jpg'

const About = () => {
    return (
        
        <div className='about'>
            <div className='about-left'>
                <img src={books} alt="" className='about-img' />
                {/* play_icon */}
                <img src= {books} alt="" className="play-icon" onClick ={() => {setPlayState(true)}}/>
            </div>
            <div className='about-right'>  
                <h3>ABOUT SCHOOL</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our
                    school's comprehensive education programs. Our cutting-edge curriculum
                    is designed to empower students with the knowledge,
                    skills, and experiences needed to excel in the dynamic field of
                    education. 
                </p>
                <p>
                    With a focus on innovation, hands-on learning, and personalized
                    mentorship, our programs prepare aspiring educators to make a
                    meaningful impact in classrooms, schools, and comunities.                        
                </p>
                <p>
                    Whether you aspire to become a teacher, administrator, 
                    counselor, or educational leader, our diverse range of programs
                    offers the perfect pathway to achieve your goals and unlock your
                    full potential in shaping of education
                </p>
            </div>
        </div>
    )
}
export default About