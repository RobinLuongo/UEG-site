import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logoWhite from '../content/images/logos/logo-white-large.png';
import logoBlue from '../content/images/logos/logo-blue-large.png';

export default function Navbar(props) {
    listenForScroll();

    const [scrolled, setScrolled] = useState(props.altStyle);
    const [mobile, setMobile] = useState("");

    const sections = ["What we do", "Partners", "Who we are", "Contact"]

    return (
        <div className={scrolled + " nav-wrapper " + mobile + " " + props.altStyle}>
            <div className="container">
                <div className="navbar">
                    <div>
                    {
                        scrolled || mobile || props.altStyle ?
                        <Link className="logo-link" to="/">
                            <img className="logo" src={logoBlue} alt="logo" />
                        </Link>
                        :
                        <Link className="logo-link" to="/">
                            <img className="logo" src={logoWhite} alt="logo"/>
                        </Link>
                    }
                    <div className="mobile-icon" onClick={handleClick}>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                    </div>
                    </div>
                    <ul className="nav-list">
                    {
                        sections.map((section, i) => {
                            return (
                                <li className="nav-link" key={i}>
                                    <a onClick={(e) => {scrollTo(e, section); if(mobile){handleClick(e)}}} href="/">
                                    {section}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li className="nav-link">
                        <Link to="/blog/" onClick={(e) => {if(mobile) handleClick(e)}}>
                            Blog
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>

    )

    function listenForScroll() {
        if (props.altStyle !== "scrolled") {
            window.addEventListener('scroll', (e) => {
                let scrolled;
                scrolled = window.pageYOffset > 0 ? "scrolled" : "";
                setScrolled(scrolled);
            })
        }
    }

    function scrollTo(e, id) {
        e.preventDefault();

        console.log(props)
        
        if (props.location !== "/") {
            props.history.push("/");
        }

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

        if (selector !== '') {
            let retries = 0;
            const scroll = () => {
              retries += 1;
              if (retries > 50) return;
              const element = document.querySelector(selector);
              if (element) {
                setTimeout(() => {
                    window.scroll({
                        top: element.offsetTop - 100,
                        left: 0,
                        behavior: 'smooth'
                    })
                }, 0);
              } else {
                setTimeout(scroll, 100);
              }
            };
            scroll();
          }
    }

    function handleClick(e) {
        if (!mobile) {
            setMobile("mobile-expanded");
            document.querySelector("body").style.overflow = "hidden";
        } else {
            setMobile("");
            document.querySelector("body").style.overflow = "auto";
        }
    }
}
