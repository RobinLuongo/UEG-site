import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <div className="hero content-border"></div>
      <WhatWeDo />
    </div>
  );
}

export default App;
