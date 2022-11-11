import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageList from "./MessageList";
import Input from "./Input";

const Chat = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Conversation</span>
        <div className="chatIcons">
          <NotificationsIcon />
          <VideocamIcon />
          <PersonAddAlt1Icon />
          <MoreVertIcon />
        </div>
      </div>
      <MessageList showPicker={showPicker}/>
      <Input showPicker={showPicker} setShowPicker={setShowPicker}/>
    </div>
  );
};

export default Chat;
