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
                    <h2 className="content-title">Connect With Our Premier Network of Industry Partners</h2>
                    <p className="content-text">From computers to coaches - we’ve got you covered. We connect you to the industry partnerships you need to build and sustain your program. Our partners work at every level of the esports pipeline, providing support in facilities, hardware and peripherals, recruitment, coaching, league membership, broadcasting and other areas crucial to your esports launch.
                    </p>
                    <p className="content-text">
                    Our partners commit to providing exclusive services and rates to any schools that work with Uni Esports.
                    </p>
                </div>
            </div>
        </div>
    )
}
