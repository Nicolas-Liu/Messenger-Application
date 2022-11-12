import React, { useState } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageList from "./MessageList";
import Input from "./Input";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCommentIcon from '@mui/icons-material/AddComment';

const Chat = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Conversation</span>
        <div className="chatIcons">
          <Tooltip title="Notifications">
            <NotificationsIcon />
          </Tooltip>
          <Tooltip title="New conversation">
            <AddCommentIcon />
          </Tooltip>
          <Tooltip title="Account ">
            <PersonIcon />
          </Tooltip>
            <Link to="/login" className="linkRouter">
              <LogoutIcon />
            </Link>
        </div>
      </div>
      <MessageList showPicker={showPicker} />
      <Input showPicker={showPicker} setShowPicker={setShowPicker} />
    </div>
  );
};

export default Chat;
