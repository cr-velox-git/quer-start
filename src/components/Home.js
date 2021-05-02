import React from "react";
import "../css/Home.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Home() {
  return (
    <div className="home_content">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default Home;
