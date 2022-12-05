import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className='logo' src={Logo} alt="" />
    {/*   {(menuOpened === false && mobile === true) ? (
        <div><img src={Bars} alt="" ></img>
      ): } */}
          <ul className='header-menu'>
            <li>Główna</li>
            <li>Sekcje treningowe</li>
            <li>Dlaczego my?</li>
            <li>Plany treningowe</li>
            <li>Kontakt</li>
          </ul>
        </div>
      )
}

      export default Header