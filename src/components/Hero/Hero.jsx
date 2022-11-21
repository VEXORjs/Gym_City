import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
    return (
        <div className="header">
            <div className="left-side">
                <Header />
                <div className='the-best-ad'>
                    <div></div>
                    <span>Najlepszy klub sportowy w mieście</span>
                </div>
                <div className="hero-text"></div>
                <div>
                    <span className='stroke-text'>Kształtuj</span>
                    <span>Swoje</span>
                </div>
                <div>
                    <span>Cialo</span>
                </div>
            </div>
            <div className='right-h'>prawa strona</div>
        </div>
    )
}

export default Hero