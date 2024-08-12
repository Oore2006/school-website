import React from 'react';
import './Campus.css';
// import books from '../../assets/books.jpg';
import arrow from '../../assets/arrow.png';
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'


const Campus = () =>{
    return (
        <div className='campus'>
            <div className='gallery'>
                <img className='gallery_1' src= {gallery_2} alt="" />
                <img className='gallery_2' src= {gallery_2} alt="" />
                <img src= {gallery_2} alt="" />
                <img  className="gallery_2" src= {gallery_2} alt="" />
                    
            </div>
            <button className='btn dark-btn'> See more here <img src={arrow} alt="" /></button>
        </div>
    )
}
export default Campus; 