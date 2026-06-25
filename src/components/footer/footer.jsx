import React from "react";
import "./footer.css";

import Logo from "../../assets/logo-pdr.png";

const Footer = () => {
    const handleCardClick = (url) => {
        if (url) {
            window.open(url, "_blank", "noopener noreferrer");
        }
    };

    return (
        <footer className="footer" id="contact">
            <button
                className="scroll-top-btn"
                aria-label="Sahifaning yuqori qismiga qaytish"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up"
                    aria-hidden="true"
                >
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                </svg>
            </button>
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-header">
                        <h2 className="footer-title">Contact</h2>
                        <p className="footer-subtitle">
                            Get in touch with us and ask your questions
                        </p>
                    </div>
                    <div className="footer-contact-grid">
                        <div
                            className="footer-contact-card clickable-card"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleCardClick("mailto:abdukarim.pdr@gmail.com")}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleCardClick("mailto:abdukarim.pdr@gmail.com");
                                }
                            }}
                        >
                            <div className="footer-contact-heading">
                                <div className="icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                </div>
                                <h3>Email</h3>
                            </div>
                            <a
                                href="mailto:abdukarim.pdr@gmail.com"
                                className="contact-value-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                abdukarim.pdr@gmail.com
                            </a>
                        </div>

                        <div
                            className="footer-contact-card clickable-card"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleCardClick("tel:+971582784740")}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleCardClick("tel:+971582784740");
                                }
                            }}
                        >
                            <div className="footer-contact-heading">
                                <div className="icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                    </svg>
                                </div>
                                <h3>Telephone</h3>
                            </div>
                            <a
                                href="tel:+971582784740"
                                className="contact-value-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                +971 58 278-47-40
                            </a>
                        </div>

                        <div className="footer-contact-card">
                            <div className="footer-contact-heading">
                                <div className="icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <h3>Location</h3>
                            </div>
                            <p className="contact-value">
                                Mobile dent repair across the UAE. We provide expert doorstep
                                service in Dubai, Abu Dhabi, Sharjah, Al Ain, Ajman, Ras
                                Al-Khaimah, and Fujairah.
                            </p>
                        </div>

                        <div
                            className="footer-contact-card clickable-card"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleCardClick("https://wa.me/971582784740")}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleCardClick("https://wa.me/971582784740");
                                }
                            }}
                        >
                            <div className="footer-contact-heading">
                                <div className="icon-wrapper whatsapp-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        className="whatsapp-svg"
                                    >
                                        <title>Baseline-whatsapp SVG Icon</title>
                                        <path
                                            fill="currentColor"
                                            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                        />
                                    </svg>
                                </div>
                                <h3>WhatsApp</h3>
                            </div>
                            <a
                                href="https://wa.me/971582784740"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-value-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                +971 58 278-47-40
                            </a>
                        </div>

                        <div
                            className="footer-contact-card clickable-card"
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                                handleCardClick(
                                    "https://www.instagram.com/abdukarim_pdr_uae_/"
                                )
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleCardClick(
                                        "https://www.instagram.com/abdukarim_pdr_uae_/"
                                    );
                                }
                            }}
                        >
                            <div className="footer-contact-heading">
                                <div className="icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                <h3>Instagram</h3>
                            </div>
                            <a
                                href="https://www.instagram.com/abdukarim_pdr_uae_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-value-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                @abdukarim_pdr_uae_
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-brand-row">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <img src={Logo} alt="Abdukarim PDR Logo" />
                            </div>
                            <div className="footer-logo-text">
                                <h2>ABDUKARIM PDR</h2>
                                <p>Paintless Dent Removal Expert</p>
                            </div>
                        </div>
                        <div className="footer-social-links">
                            <span className="social-label">Follow us on social media:</span>
                            <div className="footer-socials">
                                <a
                                    href="https://www.instagram.com/abdukarim_pdr_uae_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/971582784740"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="WhatsApp"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>Baseline-whatsapp SVG Icon</title>
                                        <path
                                            fill="currentColor"
                                            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-row">
                        <div className="footer-info">
                            <p className="footer-description">
                                Professional paintless dent removal that preserves your car's
                                original finish. Expert care for a flawless look.
                            </p>
                            <div className="footer-stats">
                                <div className="stat-item">
                                    <span className="stat-number">10+ years</span>
                                    <span className="stat-label">of our experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Fast 1-2</span>
                                    <span className="stat-label">hour service</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Best Price</span>
                                    <span className="stat-label">Affordable & Transparent</span>
                                </div>
                            </div>
                        </div>
                        <ul className="footer-menu">
                            <li>
                                <a className="footer-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-bottom-row">
                        <p className="copyright">
                            © 2026 abdukarim-pdr.com. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;