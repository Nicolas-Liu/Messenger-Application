import EmojiPicker from "emoji-picker-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";


interface IMessage {
  showPicker: boolean;
}

const MessageList = ({ showPicker }: IMessage) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const  [messages, setMessages] = useState([]);
  const {data}:any = useContext(ChatContext);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })

    return()=>{
      unSub()
    }
  },[data.chatId])


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
      {messages.map((m:any)=>(
        <Message message={m} key={m.id}/>
      ))}
      
      {/* <div className={showPicker ? "emojiContainer" : "hide"}>
        <EmojiPicker height={395}/>
      </div> */}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageList;
