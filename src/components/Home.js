import React from 'react';

import './Home.css';

import HeroContent from './HeroContent';
import WhatWeDo from './WhatWeDo';
import Partners from './Partners';
import WhoWeAre from './WhoWeAre';
import Contact from './Contact';

function Home(props) {
  props.setNavStyle("");

  return (
      <div>
        <HeroContent />
        <div className="hero content-border"></div>
        <WhatWeDo />
        <Partners />
        <WhoWeAre />
        <Contact />
      </div>
  );
}

export default Home;
