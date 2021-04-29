import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/QuerBox.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";


function QuerBox() {

    const user = useSelector(selectUser);

  return <div className="querBox">
      <div className="querBox_info">
          <Avatar src = {user.photo}/>
          <h5>{user.displayName}</h5>
      </div>
      <div className="querBox_quer">
          <p>What is your Question</p>
      </div>
  </div>;
}
export default QuerBox;
