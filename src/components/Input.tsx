import React, { useContext, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import EmojiPicker from "emoji-picker-react";
import { AuthContext } from "../context/AuthContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChatContext } from "../context/ChatContext";


interface IInput {
  showPicker: any;
  setShowPicker: any;
}
const Input = ({showPicker, setShowPicker}: IInput) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState<any>();

  // const onEmojiClick = (event:any, e, mojiObject:any) => {
  //   // setInputStr(prevInput => prevInput + emojiObject.emoji);
  //   setShowPicker(false);
  // };

  const {currentUser}:any = useContext(AuthContext);
  const {data}:any = useContext(ChatContext);
 console.log('data1', data)
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      console.log('data1', data)
      uploadTask.on(
        (err) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      console.log('data', data)
      await updateDoc(doc(db, "chats", data?.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  const handleKeyPress = (e: any) => {
    console.log('pressed before')
    if(e.keyCode == 13){
      console.log('pressed')
      handleSend()
    }
  }

  return (
    <div className="input">
      <input type="text" placeholder="Write a message..." value={text} onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" onChange={e=>setImg(e.target.files)}/>
        <label htmlFor="file">
          <AttachFileIcon />
        </label>

        {/* <div onClick={() => setShowPicker(!showPicker)}>
          <SentimentVerySatisfiedIcon />
        </div> */}

        <SendIcon onKeyPress={handleKeyPress} onClick={handleSend}/>
      </div>
    </div>
  );
};

export default Input;
