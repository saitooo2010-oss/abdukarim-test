import React, { useState } from 'react';
import "./service.css";

import Sportcars from "../../assets/Sportscar.jpg";

import service1 from "../../assets/1.png";
import service2 from "../../assets/2.png"
import service3 from "../../assets/3.png";
import service4 from "../../assets/4.png";
import service5 from "../../assets/5.jpeg"
import service6 from "../../assets/6.jpg";
import service7 from "../../assets/7.jpg";
import service8 from "../../assets/8.jpg";
import first from "../../assets/first.png"

function Service() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [service1, service2, service3, service4, service5, service6, service7, service8];

    const openModal = (img) => {
        setCurrentImage(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage('');
    };

    const NumberOneSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14h-2V9h-2V7h4z" /></svg>
    );

    return (
        <div className="service-container">
            <div className="background-img">
                <img src={Sportcars} alt="Sportcars" />
                <div className="overlay"></div>
                <div className="header-text">
                    <h2>Our <span>Services</span></h2>
                    <p>Paintless Dent Removal Expert</p>
                    <div className="tagline">
                        <span>Fast • Clean • Paint-Free Dent Repair</span>
                    </div>
                </div>
            </div>
            <div className="repair-process">
                <div className="process-header">
                    <h2>OUR <span>HAIL DAMAGE</span> REPAIR PROCESS</h2>
                    <p className="process-description">
                        Our process will efficiently get you back to having a safe, secure, and beautiful roof.
                    </p>
                </div>

                <div className="process-steps">
                    <div className="process-step">
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Visual-inspection SVG Icon</title><path fill="currentColor" d="m26 24.586l-5.115-5.115a6 6 0 0 0 .96-4.843c-.497-2.208-2.278-3.99-4.488-4.478a6.015 6.015 0 0 0-7.207 7.207c.487 2.21 2.27 3.992 4.478 4.489a6 6 0 0 0 4.843-.96L24.586 26zm-8.915-4.73a4.014 4.014 0 0 1-4.94-4.944a3.95 3.95 0 0 1 2.77-2.768a4.014 4.014 0 0 1 4.94 4.945a3.95 3.95 0 0 1-2.77 2.768m11.981-3.5l-.065-.17C27.01 10.948 21.423 7 16 7S4.99 10.948 3 16.183l-.067.173a1 1 0 0 1-1.868-.715l.066-.17C3.399 9.501 9.792 5 16 5s12.602 4.502 14.87 10.474l.064.168M16 27C9.792 27 3.4 22.497 1.131 16.526l-.064-.166a1 1 0 0 1 1.866-.72l.066.171C4.99 21.051 10.58 25 16 25z" /></svg>
                        </div>
                        <div className="step-content">
                            <h3>Inspection</h3>
                            <p>We'll thoroughly inspect the roof to find the extent of the damage.</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Outline-assessment SVG Icon</title><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" /></svg>
                        </div>
                        <div className="step-content">
                            <h3>Assessment</h3>
                            <p>We'll determine if repair or replacement is the best course of action.</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <h3>Repair</h3>
                            <p>We'll fix the roof using high-quality materials and the latest techniques.</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <h3>Final Inspection</h3>
                            <p>We'll double check that everything is up to our high standards.</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Clean SVG Icon</title><path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z" /><path fill="currentColor" d="M17.003 20a4.9 4.9 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.7 5.7 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.6 16.6 0 0 1 10 24H8a17.3 17.3 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13 13 0 0 0 17.596 28Z" /></svg>
                        </div>
                        <div className="step-content">
                            <h3>Clean Up</h3>
                            <p>We'll take care of hauling away old materials and leave your property clean.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prices-services">
                <div className="service-item">
                    <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>
                    <div className="service-header">
                        <NumberOneSvg />
                        <h2>Small Dent</h2>
                    </div>
                    <p className="size">2 - 5 cm</p>
                    <p className="price">200+ AED - 300+ AED</p>
                    <p className="price-usd">55+ USD - 80+ USD</p>
                </div>
                <div className="service-item">
                    <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="5" />
                        </svg>
                    </div>
                    <div className="service-header">
                        <NumberOneSvg />
                        <h2>Medium Dent</h2>
                    </div>
                    <p className="size">5 - 10 cm</p>
                    <p className="price">400+ AED - 600+ AED</p>
                    <p className="price-usd">110+ USD - 165+ USD</p>
                </div>
                <div className="service-item">
                    <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="7" />
                        </svg>
                    </div>
                    <div className="service-header">
                        <NumberOneSvg />
                        <h2>Large Dent</h2>
                    </div>
                    <p className="size">10+ cm</p>
                    <p className="price">700+ AED - 1000+ AED</p>
                    <p className="price-usd">190+ USD - 275+ USD</p>
                </div>
            </div>
            <div className="services-gallery">
                <h2 className="gallery-title">Before & After</h2>

                <div className="featured-image-container">
                    <img
                        src={first}
                        alt="Featured Service"
                        className="featured-service-image"
                        onClick={() => openModal(first)}
                    />
                </div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Before After ${index + 1}`}
                            onClick={() => openModal(img)}
                        />
                    ))}
                </div>
            </div>
            <div className="satisfaction">
                <div className="satisfaction-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <h2>Satisfaction and customer reviews</h2>
                <p className='satisfaction-text'>100% satisfaction and customer happiness, no painting or filler, just precision dent repairing.</p>
                <div className="stars">
                    <span>★★★★★</span>
                    <p>5.0 Rating</p>
                </div>
            </div>
            <div className="about-cta">
                <h3>Ready to restore your car?</h3>
                <a href="#contact" className="about-cta-btn">Contact Us Today</a>
            </div>
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <img src={currentImage} alt="Enlarged view" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Service;