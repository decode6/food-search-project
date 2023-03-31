import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';




 function Navbar() {

  const [dropdown, setDropdown] = useState(false);
  

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' >
           Meal Dash
        </Link>


        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links' > Home </Link>
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/recipe' className='nav-links' > Recipe <i className='fas fa-caret-down' /></Link>
            {dropdown && <Dropdown />}

          </li>
          <li className='nav-item'>
            <Link to='/save' className='nav-links'>Save</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-us' className='nav-links'>About Us</Link>
          </li>

        </ul>
        
        <Button />
      </nav>
    </>
  );
}

export default Navbar;