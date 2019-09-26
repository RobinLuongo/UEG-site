import React, { useState } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import PriceTool from './components/PriceTool'

const NavWithLocation = withRouter(Navbar);

function App() {
  const [navStyle, setNavStyle] = useState("");

  return (
    <Router>
      <div>
        <NavWithLocation altStyle={navStyle}/>
        <Switch>
          <Route path="/price-tool/" render={(props) => <PriceTool {...props} setNavStyle={setNavStyle} />} />
          <Route path="/" render={(props) => <Home {...props} setNavStyle={setNavStyle} />} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
