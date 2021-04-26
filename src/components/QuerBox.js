import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/QuerBox.css";

function QuerBox() {
  return <div className="querBox">
      <div className="querBox_info">
          <Avatar/>
          <h5>User Name</h5>
      </div>
      <div className="querBox_quer">
          <p>What is your Question</p>
      </div>
  </div>;
}
export default QuerBox;
