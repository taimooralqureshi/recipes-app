import React from 'react';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
 const Navbar = () => {
     return ( 
            <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                <Link to='/' >
                    <img src={logo} alt="logo" />
                </Link>
                <div className='collapse navbar-collapse show ml-sm-5' >
                    <ul className='navbar-nav' >
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/recipes'>Recipes</Link>
                        </li>

                    </ul>

                </div>
            </nav>
      );
 }
  
 export default Navbar;