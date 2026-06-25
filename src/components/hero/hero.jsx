import React from 'react';
import "./hero.css";
import Ferrari from "../../assets/ferrari-background.jpg";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-image">
                <img src={Ferrari} alt="Ferrari" />
                <div className="hero-overlay"></div>
            </div>

            <div className="header-texts">
                <h1 className='head-text'>Welcome to <br /><span className='head-text-white'>ABDUKARIM PDR</span></h1>
                <p className='sub-text'>Paintless Dent Repair Expert</p>
            </div>

            <div className="link-buttons">
                <a href="#services" className="cta-button">Our Services</a>
                <a href="#contact" className="cta-button cta-secondary">Contact Us</a>
            </div>
        </div>
    )
}

export default Hero;