import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md';  
import BentoHouse from '../../img/BentoHouse.png';


import './Navbar.css';




const Navbar = () => {

  // Hamburger Menu 
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <img src={BentoHouse} alt="" />
      </div>
      <ul className='navbar-links'>
        <li className='p-opensans'>
          <a href="#home">Home</a>
        </li >
        <li className='p-opensans'>
          <a href="#about">About</a>
        </li>
        <li className='p-opensans'>
          <a href="#menu">Menu</a>
        </li>
        <li className='p-opensans'>
          <a href="#reviews">Reviews</a>
        </li>
        <li className='p-opensans'>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-login">
        <a href="#login" className='p-opensans'>Sign In / Register</a>
        <div></div>
        <a href="/" className='p-opensans'>Book</a>
      </div>

        {/* Dropdown Menu */}

      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => { setToggleMenu(true) }} />

        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>

            <ul className='navbar-smallscreen-links' >
              <li className='p-opensans'>
                <a onClick={() => setToggleMenu(false)} href="#home" >Home</a>
              </li >
              <li className='p-opensans'>
                <a onClick={() => setToggleMenu(false)} href="#about">About</a>
              </li>
              <li className='p-opensans'>
                <a onClick={() => setToggleMenu(false)} href="#menu">Menu</a>
              </li>
              <li className='p-opensans'>
                <a onClick={() => setToggleMenu(false)} href="#reviews">Reviews</a>
              </li>
              <li className='p-opensans'>
                <a onClick={() => setToggleMenu(false)} href="#contact">Contact</a>
              </li>
            </ul>

          </div>
        )}



      </div>

    </nav>
  );
}

export default Navbar;