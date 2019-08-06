import React from 'react';
import './WhatWeDo.css';
import graphic from '../content/images/wwd-graphic2.png'

export default function Navbar() {
    return (
        <div className="what-we-do content-border" id="whatWeDo">
            <div className="container two-column">
                <div className="column-left">
                    <h2 className="content-title">Build the Right Program</h2>
                    <p className="content-text">User experience lean startup launch party. Infographic seed round innovator A/B testing iPad niche market. Stealth infographic advisor creative equity business-to-consumer. Hypotheses gen-z virality. Disruptive ecosystem MVP. Series A financing termsheet business-to-consumer hypotheses iteration sales low hanging fruit creative partnership accelerator freemium stealth startup. </p>
                </div>
                <div>
                    <img className="wwd-graphic" src={graphic} />
                </div>
            </div>
        </div>
    )
}
