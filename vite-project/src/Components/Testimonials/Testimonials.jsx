import {React, useRef} from 'react'
import './Testimonials.css'
import arrow from '../../assets/arrow.png'
import program from '../../assets/program.jpg'

const Testimonials = () =>{

        const slider  = useRef();
            let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = 'translateX(${tx}%)'
    }
    const slideBackward = () =>{

    }
    return(
        <div className='testimonials'>
            <img src= {arrow} alt="next-btn"  onClick={slideForward}/>
            <img src= {arrow} alt="back-btn"  onClick={slideBackward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src= {program} alt="" />
                                <div>
                                    <h3>william Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my expectations.

                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src= {program} alt="" />
                                <div>
                                    <h3>william Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my expectations.

                            </p>
                        </div>
                    </li> <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src= {program} alt="" />
                                <div>
                                    <h3>william Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my expectations.

                            </p>
                        </div>
                    </li> <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src= {program} alt="" />
                                <div>
                                    <h3>william Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my expectations.

                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Testimonials;