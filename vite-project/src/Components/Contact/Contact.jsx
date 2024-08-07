import React from 'react'
import './Contact.css'
import programs from '../../assets/program.jpg'

const Contact = () =>{
    return(
        <div className='contact'>
            <div className='contact-col'>
                {/* Message Icon */}
                <h3> Send Us a Message  <img src={programs} alt="" /> </h3>
                <p>Feel free to reach out through contact form or find 
                    or Find our Contact information below, Your feedback, questions, and suggetions are important to us
                    as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    {/* mail icon */}
                    <li> <img src={programs} alt="" /> Contact@greatstack.dev</li>
                    {/* phone icon */}
                    <li>+234 704-133-7559</li>
                    {/* locaation icon */}
                    <li>77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>

                </ul>
            </div>
            <div className='Contact-col'>
                <form action="">
                    <label> Your name</label>
                    <input type="text" name='name' placeholder='Enter Your name' required />
                    <label > Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter Your mobile number' required />
                    <label> Write your message here</label>
                    <textarea name="message"  rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit now</button>


                </form>
            </div>
        </div>
    )
}
export default Contact;