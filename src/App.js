import React, { useState } from 'react';
import './App.css';

import ReactModal from 'react-modal';

import Navbar from './components/Navbar';
import WPModal from './components/WPModal';
import HeroContent from './components/HeroContent';
import WhatWeDo from './components/WhatWeDo';
import Partners from './components/Partners';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Navbar />
      <WPModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <HeroContent openModal={openModal}/>
      <div className="hero content-border"></div>
      <WhatWeDo />
      <Partners />
      <WhoWeAre />
      <Contact />
    </div>
  );

  function openModal(e) {
    e.preventDefault();
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
}

export default App;
