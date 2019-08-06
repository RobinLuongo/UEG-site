import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';

import heroDark from './content/images/hero-dark.jpg';
import hero from './content/images/hero.jpg';

function App() {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <div className="hero content-border"></div>
      <WhatWeDo />
      <WhoWeAre />
    </div>
  );
}

export default App;
