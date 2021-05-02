import React from "react";
import "../css/Quer.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Notification from "./Notification";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function quer() {
  return (
    <Router>
<div className="quer">
      <Navbar />
      <Switch>
        <Route path="/Home" exact component = {Home}/>
        <Route path="/About" exact component = {About}/>
        <Route path="/Notification" exact component = {Notification}/>
      </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default quer;
