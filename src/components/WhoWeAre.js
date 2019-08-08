import React from 'react';
import './WhoWeAre.css';
import atlas from '../content/images/headshots/atlas.jpeg';
import jesse from '../content/images/headshots/jesse.jpeg';
import alex from '../content/images/headshots/alex.jpeg';
import calvin from '../content/images/headshots/calvin.jpeg';
import kyawt from '../content/images/headshots/kyawt.jpg';
import suresh from '../content/images/headshots/suresh.jpg';
import matthew from '../content/images/headshots/matthew.jpg';
import robin from '../content/images/headshots/robin.jpg';

export default function WhoWeAre() {
    return (
        <div className="who-we-are content-border">
            <h2 className="content-title">Meet our Team</h2>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Matthew Bronson, Advisor</div>
                        <p className="bio-text">A veteran educator and higher ed consultant, Matthew has over 25 years of experience in higher education assessment and executive planning. He has led reaccreditation efforts at numerous institu</p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Suresh Apavoo, Advisor</div>
                        <p className="bio-text">Suresh Appavoo has over 18 years in diversity leadership roles in higher education. Before assuming his role the Chief Diversity and Inclusivity Officer for Southern Oregon University, Suresh ser</p>
                    </div>
                </div>
            </div>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Alex McNeil, CEO</div>
                        <p className="bio-text">Alex has bootstrapped two successful businesses in the education space, overseeing them from startup to multiple employee exits. With North Coast Prep, Alex became a thought leader in the North Ba</p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Jesse Bodony, COO</div>
                        <p className="bio-text">Jesse treads the line between the worlds of traditional athletics and esports. Having captained the U23 division of the Colorado Rapids MLS team and consistently reached grandmaster in both Starcra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
