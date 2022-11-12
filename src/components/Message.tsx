import React from "react";
import profilePic from '../assets/profile-pic.jpg'
const Message = () => {
  return (
    <div className="messageBubble owner">
      <div className="messageInfo">
        <div className="name">Nicolas</div>
        <img src={profilePic} alt="" />
        <span>{Date().slice(0,10)}</span>
      </div>
      <div className="messageContent">
        <div className="textContent">Hello</div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
