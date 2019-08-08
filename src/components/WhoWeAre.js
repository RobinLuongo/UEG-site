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
            <div className="two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Matthew Bronson, Advisor</div>
                        <p className="bio-text">A veteran educator and higher ed consultant, Matthew has over 25 years of experience in higher education assessment and executive planning. He has led reaccreditation efforts at numerous institutions and guided countless programs through the planning and implementation phases of innovative co-curricular initiatives. He is currently advisor to the UC Davis-based LibreText, the largest open educational resource (OER) initiative in the world. Matthew brings to Uni his deep experience with program design and a passion for charting the edge of innovation in higher education.</p>
                    </div>
                    <img className="bio-image" src={matthew}/>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Suresh Apavoo, Advisor</div>
                        <p className="bio-text">Suresh Appavoo has over 18 years in diversity leadership roles in higher education. Before assuming his role the Chief Diversity and Inclusivity Officer for Southern Oregon University, Suresh served as both the Dean for Equity and Diversity and the Director for the Center of Diversity at the Dominican University of California. Suresh joins Uni with the goal of helping steer esports toward a more equitable and diverse future on college and university campuses across the United States.</p>
                    </div>
                    <img className="bio-image" src={suresh}/>
                </div>
            </div>
            <div className="two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Alex McNeil, CEO</div>
                        <p className="bio-text">Alex has bootstrapped two successful businesses in the education space, overseeing them from startup to multiple employee exits. With North Coast Prep, Alex became a thought leader in the North Bay Area about the negative effects of academic overwork on student mental wellbeing. He holds an MA from San Francisco State in political theory, and cares deeply about issues of equity and mental health in education. He leads Uni as CEO, coordinating efforts to build the first generation of best-in-class collegiate esports programs. In his spare time he writes op-eds and reads science fiction.</p>
                    </div>
                    <img className="bio-image" src={alex}/>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Jesse Bodony, COO</div>
                        <p className="bio-text">Jesse treads the line between the worlds of traditional athletics and esports. Having captained the U23 division of the Colorado Rapids MLS team and consistently reached grandmaster in both Starcraft II and Hearthstone, Jesse understands the demands that face student-athletes and student-gamers throughout school. Jesse holds an MA in Humanities from Dominican University, where his scholarship was recognized for its rigor and creativity. Jesse brings his expertise and strong leadership experience to Uni, where he leads the team in creating the first generation of best-in-class collegiate esports programs. </p>
                    </div>
                    <img className="bio-image" src={jesse}/>
                </div>
            </div>
        </div>
    )
}
