import React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';
import { HashRouter, NavLink, Route } from "react-router-dom";
import Programs from '../Programs/Programs';
import Reasons from '../Reasons/Reasons';
import Plans from '../Plans/Plans';
import Testimonials from '../Testimonials/Testimonials';
import Hero from '../Hero/Hero';

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
    <>
      <img onClick={handleClick} className='logo' src={Logo} alt="" />
      <div className="header">
      </div>

    </>
/*      <HashRouter>*/
        /*  <ul className='header-menu'>
          <li><NavLink exact to='/'>Główna</NavLink></li>
          <li><NavLink to="/programs">Sekcje treningowe</NavLink></li>
          <li><NavLink to="/reasons">Dlaczego my?</NavLink></li>
          <li><NavLink to="/plans">Plany treningowe</NavLink></li>
          <li><NavLink to="/testimonials">Kontakt</NavLink></li>
        </ul> */
  /*       <div>
          <Route exact path='/' Component={Hero} />
          <Route path='programs' Component={Programs} />
          <Route path='/reasons' Component={Reasons} />
          <Route path='/plans' Component={Plans} />
          <Route path='/testimonials' Component={Testimonials} />
        </div> */
 /*    </HashRouter>  */
  )
}

export default Header