import React from "react";
import "../css/Quer.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function quer() {
  return (
  
      <div className="quer">
        <Navbar />
        <div className="quer_content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        <Footer />
      </div>
    
  );
}

export default quer;
