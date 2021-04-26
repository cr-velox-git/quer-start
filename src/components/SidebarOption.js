import React from "react";
import "../css/SidebarOption.css";
import AddIcon from '@material-ui/icons/Add';

function SidebarOption() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quer-7898.appspot.com/o/WebsiteMust%2Flogo.png?alt=media&token=38620683-915f-484f-970e-e08ca266eafd"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quer-7898.appspot.com/o/WebsiteMust%2Flogo.png?alt=media&token=38620683-915f-484f-970e-e08ca266eafd"
          alt=""
        />
        <p>Something</p>
      </div>

      <div className="sidebarOption">
        <AddIcon/>
        <p>Discover Space</p>
      </div>
    </div>
  );
}

export default SidebarOption;
