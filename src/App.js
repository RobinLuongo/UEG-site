import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import WhatWeDo from './components/WhatWeDo';
import Partners from './components/Partners';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';

import heroDark from './content/images/hero-dark.jpg';
import hero from './content/images/hero.jpg';

function App() {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <div className="hero content-border"></div>
      <WhatWeDo />
      <Partners />
      <WhoWeAre />
      <Contact />
    </div>
  );
}

export default App;
