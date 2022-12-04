import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img className='logo' src={Logo} alt="" />
      <ul className='header-menu'>
        <li>Główna</li>
        <li>Sekcje</li>
        <li>Dlaczego my?</li>
        <li>Plany treningowe</li>
        <li>Kontakt</li>
      </ul>
    </div>
  )
}

export default Header