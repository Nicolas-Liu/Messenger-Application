import React, { useContext, useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

const SideBarChats = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chats, setChats] = useState<any>([]);
  const [activeChat, setActiveChat] = useState<boolean>(false);
  const conversationSelectorHtmlRef = useRef<HTMLInputElement>(null);
  const { currentUser }: any = useContext(AuthContext);
  const { dispatch }: any = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSelect = (u: any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const convertDate = (nanoseconds: any, seconds: any) => {
    const timestamp: any = nanoseconds / 1e9 + seconds;

    return new Date(timestamp * 1000);
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a: any, b: any) => b[1].date - a[1].date)
        .map((chat: any, index:any) => (
          
            <div
            // className={isClicked ? "userChat activeChat": "userChat"}
            className={"userChat"}
            ref={conversationSelectorHtmlRef}
            key={index}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <div className="sidebar-container">
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <div className="previousMessage">
                  {chat[1].lastMessage?.text}
                </div>
              </div>
            </div>
            <div className="chats-time">
              {convertDate(chat[1].date?.nanoseconds, chat[1].date?.seconds)
                .toString()
                .slice(4, -36)}
            </div>
          </div>
          
          
        ))}
    </div>
  );
};

export default SideBarChats;
