import React from 'react';
import './HeroContent.css';
import download from '../content/images/download-white.png';

export default function Navbar() {
    return (
        <div className="hero-content">
            <div className="container">
                <h1 className="hero-content-title">Team up with Uni Esports Group</h1>
                <h2 className="hero-content-teaser">User experience lean startup launch party. Infographic seed round innovator A/B</h2>
                <span className="download-link">
                <a src="#">
                    <img src={download} />
                    Download here
                </a>
                </span>
            </div>
        </div>
    )
}