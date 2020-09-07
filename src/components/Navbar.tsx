import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return(
    <nav className='black'>
      <div className="nav-wrapper container">
        <NavLink to='/' exact className="brand-logo">TS</NavLink>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to='/' exact>Todo list</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar