import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const SideBarChats = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chats, setChats] = useState<any>([]);

  const { currentUser }: any = useContext(AuthContext);

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

  const selectConversation = () => {
    setIsClicked(true);
  };

  return (
    <div className="chats" onClick={selectConversation}>
      {/* {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div className="userChat" key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <div className="previousMessage">{chat[1].lastMessage?.text}</div>
            </div>
            <div className="chats-time">Time</div>
          </div>
        ))} */}
    </div>
  );
};

export default SideBarChats;
