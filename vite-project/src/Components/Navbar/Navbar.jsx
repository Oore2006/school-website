import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo3.png'

const Navbar = ()  => {
    const [sticky, setSticky] = useState(false);

    useEffect (() => {
        window.addEventListener('Scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);

        })
    }, []);
    return(

        <div>

        <nav className={`container ${sticky? 'dark-nav' : ''}` }>
        {/* <nav className='container'> */}
            <img src= {Logo} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li> About us</li>
                <li> Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us </button></li>


            </ul>
        </nav>
        </div>
    )
}
export default Navbar;