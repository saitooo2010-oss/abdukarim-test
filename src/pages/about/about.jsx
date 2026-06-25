import React from 'react';
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-hero">
                <div className="about-overlay"></div>
                <div className="about-hero-content">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-subtitle">Professional Paintless Dent Repair Experts</p>
                </div>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-text">
                        Abdukarim PDR is a premier paintless dent repair service provider based in the UAE. 
                        With over 10 years of experience in the industry, we've mastered the art of removing 
                        dents, dings, and hail damage without affecting your vehicle's original paint finish.
                    </p>
                </div>

                <div className="about-section">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="section-text">
                        Our mission is to provide fast, affordable, and high-quality dent repair services 
                        that preserve the value and appearance of your vehicle. We bring our expertise directly 
                        to your location, saving you time and hassle.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
                            </svg>
                        </div>
                        <h3>10+ Years</h3>
                        <p>Of experience in paintless dent repair</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h3>Fast Service</h3>
                        <p>Most repairs completed in 1-2 hours</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <h3>Quality Guaranteed</h3>
                        <p>100% satisfaction guaranteed on all repairs</p>
                    </div>
                </div>

                <div className="about-section">
                    <h2 className="section-title">Why PDR?</h2>
                    <p className="section-text">
                        Paintless Dent Repair (PDR) is the most effective way to remove minor dents and dings 
                        without damaging your car's factory paint. Unlike traditional bodywork, PDR maintains 
                        your vehicle's original finish, preserves its value, and saves you time and money.
                    </p>
                </div>

                <div className="about-cta">
                    <h3>Ready to restore your car?</h3>
                    <a href="#contact" className="about-cta-btn">Contact Us Today</a>
                </div>
            </div>
        </div>
    );
}

export default About;