import {React, useState, useEffect} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo3.png'
import menu from '../../assets/menu_icon.png'
import { Link } from 'react-scroll'

const Navbar = ()  => {
    const [sticky, setSticky] = useState(false);

    useEffect (() => {
        window.addEventListener('Scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);

        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false)  : setMobileMenu( true);
    }
    return(

        <div>

        <nav className={`container ${sticky? 'dark-nav' : ''}` }>
        {/* <nav className='container'> */}
            <img src= {Logo} alt="" className='logo'/>
            <ul className={mobileMenu? "" : "hide-mobile-menu" }>
                <li> <Link to="hero" smooth={true} offset={0} duration={500}> Home </Link> </li>
                <li> <Link to="program" smooth={true} offset={-260} duration={500} >Program</Link> </li>
                <li> <Link to="about" smooth={true} offset={-150} duration={500}> About us </Link></li>
                <li> <Link to="campus" smooth={true} offest={-260} duration={500}> Campus </Link> </li>
                <li> <Link to="testimonials" smooth={true} offset={-260} duration={500}> Testimonials </Link> </li>
                <li> <Link to="contact" smooth={true} offset={-260} duration={500} className='btn'> Contact us </Link></li>


            </ul>
            {/* menu icon image */}
            <img src={menu} alt="" className='menu-icon'  onClick={toggleMenu} />
        </nav>
        </div>
    )
}
export default Navbar;