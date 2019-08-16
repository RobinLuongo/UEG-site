import React from 'react';
import './Partners.css';
import graphic from '../content/images/partners-graphic.png'

import logo_msi from '../content/images/partners/msi_logo.png';
import logo_wa from '../content/images/partners/WooterApparel-red.png';
import logo_gs from '../content/images/partners/gamer_sensei/logo_black.png';
import logo_vm from '../content/images/partners/velocity_micro/logo_blue.png';

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
            <div className="partners-list">
                <img src={logo_vm}></img>
                <img src={logo_msi} className="msi-logo"></img>
                <img src={logo_gs}></img>
                <img src={logo_wa}></img>
            </div>
        </div>
    )
}
