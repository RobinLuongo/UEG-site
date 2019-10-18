import React from 'react';
import { Link } from "react-router-dom";

import './HeroContent.css';
import arrow from '../content/images/arrow-right.png';
import whitepaper from '../content/docs/UEG_White_Paper.pdf'

export default function HeroContent(props) {
    return (
        <div className="hero-content">
            <div className="container">
                <h1 className="hero-content-title">How much would building an esports program really cost?</h1>
                <h2 className="hero-content-teaser">Discover the costs and benefits of building an esports program at your school with our custom pricing tool. With just a few points of data, we estimate the costs of building an esports program at your school--and provide information about potential benefits for recruitment and retention.</h2>
                <span className="download-link">
                    <Link href={whitepaper} to="/price-tool">
                        <img src={arrow} alt="download collegiate esports whitepaper"/>
                        Esports Price Tool
                    </Link>
                </span>
            </div>
        </div>
    )
}
