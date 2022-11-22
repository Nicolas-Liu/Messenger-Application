import React, { useContext, useState } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageList from "./MessageList";
import Input from "./Input";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { currentUser }: any = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const {data}:any = useContext(ChatContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log('data', data)
  return (
    <>
      {currentUser && 
       <div className="chat">
       <div className="chatInfo">
         <span>@{data.user.displayName}</span>
         <div className="chatIcons">
           <Tooltip title="Notifications">
             <NotificationsIcon />
           </Tooltip>
           {/* <Tooltip title="New conversation">
             <AddCommentIcon />
           </Tooltip> */}
           <Tooltip title="Account " onClick={handleClick}>
             <PersonIcon />
           </Tooltip>
           <Menu
             id="demo-positioned-menu"
             aria-labelledby="demo-positioned-button"
             anchorEl={anchorEl}
             open={open}
             onClose={handleClose}
             anchorOrigin={{
               vertical: "top",
               horizontal: "left",
             }}
             transformOrigin={{
               vertical: "top",
               horizontal: "left",
             }}
             style={{ top: "40px" }}
           >
             {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
           <MenuItem onClick={handleClose}>My account</MenuItem>
           <MenuItem onClick={handleClose}>Logout</MenuItem> */}
             <Stack spacing={1}>
               {/* For variant="text", adjust the height via font-size */}
               <div className="userInfo-name">{currentUser.displayName!}</div>

               {/* For other variants, adjust the size with `width` and `height` */}
               <img
                 className="userInfo-img"
                 src={currentUser.photoURL!}
                 alt=""
               />
               <div className="date-creation">
                 Date joined:{" "}
                 {currentUser?.metadata?.creationTime!.slice(4, -12)}
               </div>
             </Stack>
           </Menu>
           <Link
             to="/login"
             className="linkRouter"
             onClick={() => signOut(auth)}
           >
             <LogoutIcon />
           </Link>
           {/* <div className="signout" onClick={()=>signOut(auth)}>
         <LogoutIcon />
         </div> */}
         </div>
       </div>
       <MessageList showPicker={showPicker} />
       <Input showPicker={showPicker} setShowPicker={setShowPicker} />
     </div>}

     
    </>
  );
};

export default Chat;
