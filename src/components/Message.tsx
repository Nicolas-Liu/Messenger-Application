import React, { useContext, useEffect, useRef } from "react";
import profilePic from '../assets/profile-pic.jpg'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Message = ({message}:any) => {

  const {currentUser}:any = useContext(AuthContext);
  const {data}:any = useContext(ChatContext);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log('message', message)

  const convertDate = (nanoseconds: any, seconds: any) => {
    const timestamp: any = nanoseconds / 1e9 + seconds;

    return new Date(timestamp * 1000);
  };
  return (
    <div className={`messageBubble ${message.senderId === currentUser.uid ? "owner": "other"}`} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="messageInfo">
        <div className={message.senderId === currentUser.uid ? "name": "other-author"}>{message.senderId === currentUser.uid
              ? currentUser.displayName
              : data.user.displayName}</div>
        <img className={message.senderId === currentUser.uid? "owner-avatar": "other-avatar"}src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          } alt="" />
        <span>   {convertDate(message.date?.nanoseconds, message.date?.seconds)
                .toString()
                .slice(4, -36)}</span>
      </div>
      <div className="messageContent">
        <div className={message.senderId === currentUser.uid ? "textContent": "other-textContent"}>{message.text}</div>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
