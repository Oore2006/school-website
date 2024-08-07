import React from 'react';
import './Campus.css';
import books from '../../assets/books.jpg';
import arrow from '../../assets/arrow.png';


const Campus = () =>{
    return (
        <div className='capmus'>
            <div className='gallery'>
                <img src= {books} alt="" />
                <img src= {books} alt="" />
                <img src= {books} alt="" />
                <img src= {books} alt="" />
                    
            </div>
            <button className='btn dark-btn'> See more here <img src={arrow} alt="" /></button>
        </div>
    )
}
export default Campus; 