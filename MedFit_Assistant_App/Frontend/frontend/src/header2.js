import React from 'react';
import './css/header.css';
import Logo from '../src/images/Logo_small2.png'

const Header2 = () => {

  function logout() {
    sessionStorage.removeItem("email");
  }
  return (
    <header className="header">
      <nav className="navbar">
        <div>
            <img src={Logo} alt="Logo" style={{ width: '70px', height: 'auto' }}/>
        </div>
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/signin" onClick={logout}>Log Out</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
