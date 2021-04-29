import React, {useState} from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, Input  } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../css/Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal"
import { ExpandMore, Link } from "@material-ui/icons";

function Navbar() {
  const user = useSelector(selectUser);

  //const [IsmodelOpen, setIsModelOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  return (
    <div className="navbar">
      <div className="header_logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quer-7898.appspot.com/o/WebsiteMust%2FQUE.png?alt=media&token=792f0763-9987-4505-8c0f-50c3ff9c22b7"
          alt=""
        />
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
            <Avatar onClick={() => auth.signOut()} src={user.photo} />
          </div>
          <LanguageIcon />

          <Button onClick={() => setOpenModal(true)}>Add Question</Button>
          <Modal 
          isOpen={openModal}
          onRequestClose = {()=> setOpenModal(false)}
          >
            <div className="modal_title">
             {/*_____________________________________ */}

 <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal_info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal_scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal_Field">
            {/* <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            /> */}
            <div className="modal_fieldLink">
              <Link />
              <input
                // value={inputUrl}
                // onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal_buttons">
            <button className="cancle" 
            // onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button type="sumbit" 
            // onClick={handleQuestion} 
            className="add">
              Add Question
            </button>

              {/*_____________________________________ */}

            </div>
          </Modal>
        </div>
      </dev>
    </div>
  );
}

export default Navbar;
