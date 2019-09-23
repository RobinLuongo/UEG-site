import React from 'react';
import './WhatWeDo.css';
import graphic from '../content/images/wwd-graphic2.png';
import download from '../content/images/download-white.png';
import servicesOverview from '../content/docs/UEG_Services.pdf'

export default function WhatWeDo() {
    return (
        <div className="what-we-do content-border" id="whatWeDo">
            <div className="container two-column">
                <div className="column-left">
                    <h2 className="content-title">Build the Right Program</h2>
                    <p className="content-text">We work with you to build a best-in-class esports program tailored to the unique culture, strategic goals, and values of your institution. We create a custom profile and readiness report of your school, assessing the motivations, needs, and challenges that your institution will face in creating its esports program. From there, we help build the concrete capacities—such as facilities, coaching, recruitment, and more—necessary for a successful esports launch.
                    </p>
                    <p className="content-text bold">
                    We pride ourselves on building esports programs that represent the best your institution has to offer: inclusivity, competitive excellence, and a commitment to supporting your students’ passion and expression.
                    </p>
                    <span className="download-link">
                        <a href={servicesOverview} download>
                            <img src={download} alt="download uni esports group consulting services overview"/>
                            Services Overview
                        </a>
                    </span>
                </div>
                <div className="graphic-container">
                    <img className="wwd-graphic" src={graphic} alt="uni esports group what we do graphic"/>
                </div>
            </div>
        </div>
    )
}
