import React, { useState } from 'react';
import './Navbar.css';
import logoWhite from '../content/images/logos/logo-white-large.png';
import logoBlue from '../content/images/logos/logo-blue-large.png';

export default function Navbar() {
    listenForScroll();

    const [scrolled, setScrolled] = useState("");

    const sections = ["What we do", "Partners", "Who we are", "Contact"]

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
                    {
                        sections.map((section, i) => {
                            return (
                                <li className="nav-link" key={i}>
                                    <a onClick={(e) => scrollTo(e, section)}>
                                    {section}
                                    </a>
                                </li>
                            )
                        })
                    }
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

    function scrollTo(e, id) {
        e.preventDefault();
        console.log(id)

        let selector = "";

        switch (id) {
            case "What we do":
                selector = ".what-we-do";
                break;
            case "Who we are":
                selector = ".who-we-are"
                break;
            case "Partners":
                selector = ".partners"
                break;
            case "Contact":
                selector = ".contact";
                break;
            default:
                break;
        }
        let element = document.querySelector(selector);
        console.log(element, element.offsetTop)
        // document.querySelector(selector).scrollIntoView({
        //     behavior: 'smooth'
        // })
        window.scroll({
            top: element.offsetTop - 116,
            left: 0,
            behavior: 'smooth'
        })
    }
}