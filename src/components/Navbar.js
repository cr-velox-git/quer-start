import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar, Button} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../css/Navbar.css";



function Navbar() {
  return (
    <div className="navbar">
      <div className="header_logo">
        <img src = "https://firebasestorage.googleapis.com/v0/b/quer-7898.appspot.com/o/WebsiteMust%2FQUE.png?alt=media&token=792f0763-9987-4505-8c0f-50c3ff9c22b7" alt="" />
      </div>
      <dev className="header_icons">
        <dev className="header_icon">
          <HomeIcon />
        </dev>
        <dev className="header_icon">
          <FeaturedPlayListOutlinedIcon />
        </dev>
        <dev className="header_icon">
          <AssignmentTurnedInOutlinedIcon />
        </dev>
        <dev className="header_icon">
          <PeopleOutlineIcon />
        </dev>
        <dev className="header_icon">
          <NotificationsNoneIcon />
        </dev>
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="search Quer" />
        </div>
        <div className="header_rem">
            <div className="header_avatar">
                <Avatar/>
            </div>
                <LanguageIcon/>
            
            <Button>Add Question</Button>
        </div>
      </dev>
    </div>
  );
}

export default Navbar;
