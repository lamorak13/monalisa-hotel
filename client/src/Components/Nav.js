import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-list left'>
        <li className='nav-list__item'>
          <NavLink exact to='/' className='nav-links' activeClassName='nav-links__active'>
            Home
          </NavLink>
        </li>
        <li className='nav-list__item'>
          <NavLink to='/rooms' className='nav-links' activeClassName='nav-links__active'>
            Rooms
          </NavLink>
        </li>
      </ul>
      <NavLink to='/'>
        <div className='logo-container'>
          <h1 className='logo'>Monalisa</h1>
          <span className='logo__slogan'>Hotel & resort</span>
        </div>
      </NavLink>

      <ul className='nav-list right'>
        <li className='nav-list__item'>
          <NavLink to='/services' className='nav-links'>
            Services
          </NavLink>
        </li>
        <li className='nav-list__item'>
          <NavLink to='/about' className='nav-links'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
