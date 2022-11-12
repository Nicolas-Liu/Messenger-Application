import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SideBarChats = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const selectConversation = () => {
    setIsClicked(true);
  };

  return (
    <div className="chats" onClick={selectConversation}>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <div className="previousMessage">oh Hi</div>
        </div>
        <div className="chats-time">Time</div>
      </div>
      {/* <CloseIcon/> */}
    </div>
  );
};

export default SideBarChats;
