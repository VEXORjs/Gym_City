import React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload(true);
  }

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <div className="header">
      <img onClick={handleClick} className='logo' src={Logo} alt="" />
      <ul className='header-menu'>
        <li href="#">Główna</li>
        <li>Sekcje treningowe</li>
        <li>Dlaczego my?</li>
        <li>Plany treningowe</li>
        <li>Kontakt</li>
      </ul>
    </div>
  )
}

export default Header