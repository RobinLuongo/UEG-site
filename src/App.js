import React, { useState } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';

const NavWithLocation = withRouter(Navbar);

function App() {
  const [navStyle, setNavStyle] = useState("");

  return (
    <Router>
      <div>
        <NavWithLocation altStyle={navStyle}/>
        <Route path="/" exact render={(props) => <Home {...props} setNavStyle={setNavStyle} />} />
      </div>
    </Router>
  );

}

export default App;
