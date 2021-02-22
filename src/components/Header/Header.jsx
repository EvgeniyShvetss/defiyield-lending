import React, { useState } from 'react';
import logo from '../../assets/logo.svg'

import './header.scss'

const Header = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className='header'>
      <div className="container header__container">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <img src={logo} alt=""/>
            <span className="header__logo-text">DEFIYIELD</span>
          </a>
        </div>
        <div className={isActive ? "header__list-button" : 'header__list-button button-active'} onClick={handleToggle} >
          <span/>
          <span/>
          <span/>
        </div>
        <div className={isActive ? "header__list" : 'header__list menu-active'}>
          <a href='#feautures' className="header__list-item" onClick={handleToggle}>Feautures</a>
          <a href='#intergrations' className="header__list-item" onClick={handleToggle}>Intergrations</a>
          <a href='#community' className="header__list-item" onClick={handleToggle}>Community</a>
          <a href="https://dashdev.defiyield.info/" className="header__list-link" onClick={handleToggle}>Connect Wallet</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
