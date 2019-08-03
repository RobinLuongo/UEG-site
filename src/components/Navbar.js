import React, { useState } from 'react';
import './Navbar.css';
import logoWhite from '../content/images/logos/logo-white-large.png';
import logoBlue from '../content/images/logos/logo-blue-large.png';

export default function Navbar() {
    listenForScroll();

    const [scrolled, setScrolled] = useState("");

    return (
        <div className={scrolled + " nav-wrapper"}>
            <div className="container">
                <div className="navbar">
                    {
                        scrolled ? 
                        <a className="logo-link">
                            <img className="logo" src={logoBlue} alt="logo" />
                        </a>
                        :
                        <a className="logo-link">
                            <img className="logo" src={logoWhite} alt="logo"/>
                        </a>
                    }
                    <ul className="nav-list">
                        <li className="nav-link">
                            <a>
                                What we do
                            </a>
                        </li>
                        <li className="nav-link">
                            <a>
                                Partners
                            </a>
                        </li>
                        <li className="nav-link">
                            <a>
                                Who we are
                            </a>
                        </li>
                        <li className="nav-link">
                            <a>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )

    function listenForScroll() {
        window.addEventListener('scroll', (e) => {
            let scrolled;
            scrolled = window.pageYOffset > 0 ? "scrolled" : "";
            setScrolled(scrolled);
        })
    }
}