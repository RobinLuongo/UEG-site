import React from 'react';
import './HeroContent.css';
import download from '../content/images/download-white.png';

export default function Navbar() {
    return (
        <div className="hero-content">
            <div className="container">
                <h1 className="hero-content-title">State of the Game: Collegiate Esports and the Future of University Gaming</h1>
                <h2 className="hero-content-teaser">In this White Paper we break down the current state of collegiate esports, covering program development, administrative sentiment while highlighting the greatest benefits and obstacles to starting a program. With data collected from our national survey of over 400 university Athletic Directors, our report provides the most conprehensive available snapshot of the collegiate esports space.</h2>
                <span className="download-link">
                <a src="#">
                    <img src={download} />
                    Download the Report
                </a>
                </span>
            </div>
        </div>
    )
}
