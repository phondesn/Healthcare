import React from 'react';
import './css/header.css';
import Logo from '../src/images/Logo_small2.png'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div>
            <img src={Logo} alt="Logo" style={{ width: '70px', height: 'auto' }}/>
        </div>
        <ul className="nav-links">
          <li><a href="/signin">Dashboard</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
