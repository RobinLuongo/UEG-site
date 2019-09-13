import React from 'react';
import './WhoWeAre.css';
// import atlas from '../content/images/headshots/atlas.jpeg';
// import jesse from '../content/images/headshots/jesse.jpeg';
// import alex from '../content/images/headshots/alex.jpeg';
// import calvin from '../content/images/headshots/calvin.jpeg';
// import kyawt from '../content/images/headshots/kyawt.jpg';
// import suresh from '../content/images/headshots/suresh.jpg';
// import matthew from '../content/images/headshots/matthew.jpg';
// import robin from '../content/images/headshots/robin.jpg';

export default function WhoWeAre() {
    return (
        <div className="who-we-are content-border">
            <h2 className="content-title">Meet Our Team</h2>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Matthew C. Bronson, PhD, Advisor</div>
                        <p className="bio-text">A veteran educator and higher ed consultant, Matthew has over 25 years of experience in higher education assessment and executive planning. He is currently an advisor to the UC Davis-based LibreText, the largest open educational resource (OER) initiative in the world. Matthew brings to Uni his deep experience with program design and a passion for charting the edge of innovation in higher education.</p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Suresh Appavoo, Ed.D, Advisor</div>
                        <p className="bio-text">Suresh Appavoo has over 18 years in diversity leadership roles in higher education and currently serves as the Chief Diversity and Inclusivity Officer for Southern Oregon University. Suresh joins Uni with the goal of helping steer esports toward a more equitable and diverse future on college and university campuses across the United States.</p>
                    </div>
                </div>
            </div>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Alex McNeil, President & Co-founder</div>
                        <p className="bio-text">Alex has bootstrapped two successful businesses in the education space, overseeing them from startup to multiple employee exits. He holds an MA from San Francisco State in political theory, and cares deeply about issues of equity and mental health in education. At Uni, Alex coordinates efforts to build the first generation of best-in-class collegiate esports programs. </p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Jesse Bodony, CEO & Co-founder</div>
                        <p className="bio-text">Jesse treads the line between esports and athletic administration and leadership. Having captained the U23 division of the Colorado Rapids MLS team, led the implementation of Dominican University’s esports program, and gained extensive experience in administration and academic program creation, he understands the process of launching a program from multiple angles. At Uni, Jesse leads internal operations and organizational strategy. He is an avid gamer and former Starcraft II grandmaster. </p>
                    </div>
                </div>
            </div>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Kyawt Thiri Nyunt, Head of Diversity & Equity</div>
                        <p className="bio-text">Kyawt is an internationally-recognized short-film artist who holds an MBA from Dominican University’s school of business. Her work has focused on issues of representation, belonging, and  diversity in her native country of Myanmar. She is an avid gamer who leads Uni’s diversity and inclusion efforts as Chief Diversity Officer, where she helps build programs that address the issues of discrimination and exclusion endemic to esports. </p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Robin Luongo, Head of Technology</div>
                        <p className="bio-text">Robin learned about programming at the same time he started gaming, at age six, when his dad worked as a developer for the iconic software company Broderbund. As a former software engineer and network and systems administrator, Robin fills the role of CTO at Uni, helping schools to understand the all-important technological side of esports and program development.</p>
                    </div>
                </div>
            </div>
            <div className="container two-column">
                <div className="bio-container left-column">
                    <div className="bio-content">
                        <div className="bio-name">Calvin Bryne, Legal Counsel</div>
                        <p className="bio-text">Calvin holds a JD from the University of California Irvine. A staunch advocate for human rights, Calvin has worked for the ACLU, the UCI Human Rights Clinic, and several other non-profit organizations. Calvin has gamed since he was young and brings his passion for esports to his role as legal counsel for Uni. </p>
                    </div>
                </div>
                <div className="bio-container right-column">
                    <div className="bio-content">
                        <div className="bio-name">Atlas Tanguay, Director of Communications</div>
                        <p className="bio-text">With a background in behavioral healthcare management, Atlas brings experience facilitating communication between private and institutional stakeholders. At Uni, Atlas manages client workflows to ensure programs are developed on time, to standard, and aligned with your vision. A life-long gamer, he is passionate about manifesting the future of collegiate esports alongside our member institutions. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
