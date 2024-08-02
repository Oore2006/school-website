import React from 'react'
import './Programs.css'
import program from '../../assets/program.jpg'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program} alt="" />
        
            <div className='caption'>
                <img src={program} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program} alt="" />

            <div className='caption'>
                <img src={program} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>

        <div className='program'>
            <img src={program} alt="" />
            
            <div className='caption'>
                <img src={program} alt="" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
        
    </div>
  )
}

export default Programs;