import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo-pdr.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`nav-box ${sticky ? "sticky-on" : ""}`}>
            <div className="nav-content">
                <a href="#home" className="brand-group">
                    <div className="logo-circle">
                        <img src={Logo} alt="PDR Logo" />
                    </div>
                    <div className="brand-titles">
                        <span className="name-main">ABDUKARIM</span>
                        <span className="name-sub">PDR</span>
                    </div>
                </a>

                <div className={`menu-list ${isOpen ? "open" : ""}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#stats" onClick={() => setIsOpen(false)}>Statistics</a>
                    <a href="#contact" className="cta-white" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className={`burger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
