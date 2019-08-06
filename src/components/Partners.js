import React from 'react';
import './Partners.css';
import graphic from '../content/images/partners-graphic.png'

export default function Partners() {
    return (
        <div className="partners content-border" id="partners">
            <div className="container two-column">
                <div className="column-left">
                    <img className="wwd-graphic" src={graphic} />
                </div>
                <div>
                    <h2 className="content-title">From computers to coaches - we've got you covered</h2>
                    <p className="content-text">User experience lean startup launch party. Infographic seed round innovator A/B testing iPad niche market. Stealth infographic advisor creative equity business-to-consumer. Hypotheses gen-z virality. Disruptive ecosystem MVP. Series A financing termsheet business-to-consumer hypotheses iteration sales low hanging fruit creative partnership accelerator freemium stealth startup. </p>
                </div>
            </div>
        </div>
    )
}
