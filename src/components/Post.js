import React from "react";
import "../css/Post.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post() {
  return (
    <div className="post">
      <div clasName="post_info">
        <Avatar />
        <h5>UserName</h5>
        <small>TimeStamp</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>Question</p>
          <button className="post_btnAnswer">Answer</button>
        </div>
        <div className="post_answer">
          <p></p>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/quer-7898.appspot.com/o/WebsiteMust%2Flogo.png?alt=media&token=38620683-915f-484f-970e-e08ca266eafd" alt="" />
      </div>
      <div className="post_footer">
        <div className="post_footerAction">
          <ArrowUpwardIcon />
          <ArrowDownwardIcon />
        </div>

        <RepeatIcon />
        <ChatBubbleOutlineIcon />
        <div className="post_footerLeft">
          <ShareIcon />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
