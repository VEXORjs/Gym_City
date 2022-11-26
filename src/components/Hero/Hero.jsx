import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className="header">
            <div className="left-side">
                <Header />
                <div className='the-best-ad'>
                    <div></div>
                    <span>Najlepszy klub sportowy w mieście</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Kształtuj</span>
                        <span>Swoje</span>
                    </div>
                    <div>
                        <span>Idealne Cialo</span>
                    </div>
                    <div>
                        <span>
                            some text
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>3424</span>
                        <span>wspierajacych</span>
                    </div>
                    <div>
                        <span>232323</span>
                        <span>trenerow</span>
                    </div>
                    <div>
                        <span>454675</span>
                        <span>uczestnikow</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Zapisz sie juz dzis</buttons>
                    <buttons className="btn">Dowiedz sie wiecej</buttons>
                </div>
            </div>
            <div className='right-h'>
                <button className="btn">Dolacz teraz</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Uderzenia serca na minute</span>
                    <span>112</span>
                </div>
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                <div className="calories">
                    <div>
                        <img src={Calories} alt="" />
                        <span>Spalone kalorie</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero