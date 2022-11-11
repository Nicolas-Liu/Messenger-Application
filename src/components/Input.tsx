import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import EmojiPicker from "emoji-picker-react";
interface IInput {
  showPicker: any;
  setShowPicker: any;
}
const Input = ({showPicker, setShowPicker}: IInput) => {
  // const onEmojiClick = (event:any, e, mojiObject:any) => {
  //   // setInputStr(prevInput => prevInput + emojiObject.emoji);
  //   setShowPicker(false);
  // };

  return (
    <div className="input">
      <input type="text" placeholder="Write a message..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <AttachFileIcon />
        </label>

        <div onClick={() => setShowPicker(!showPicker)}>
          <SentimentVerySatisfiedIcon />
        </div>

        <SendIcon />
      </div>
    </div>
  );
};

export default Input;
