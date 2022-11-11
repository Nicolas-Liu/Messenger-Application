import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef } from "react";
import Message from "./Message";

interface IMessage {
  showPicker: boolean;
}

const MessageList = ({ showPicker }: IMessage) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {
        messagesEndRef.current.scrollIntoView();
    }
};
useEffect(()=>{
    scrollToBottom()
},[showPicker])

  return (
    <div className="messageList">
      <Message />
      <div className={showPicker ? "emojiContainer" : "hide"}>
        <EmojiPicker height={395}/>
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageList;
