import React, { useState } from "react";
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

const Chat = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Conversation</span>
        <div className="chatIcons">
          <Tooltip title="Notifications">
            <NotificationsIcon />
          </Tooltip>
          <Tooltip title="New conversation">
            <AddCommentIcon />
          </Tooltip>
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
              <Skeleton variant="text"/>

              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40}  onClick={handleClose}/>
              <Skeleton variant="rectangular" width={210} height={60}  onClick={handleClose}/>
              <Skeleton variant="rounded" width={210} height={60}  onClick={handleClose}/>
            </Stack>
          </Menu>
          <Link to="/login" className="linkRouter">
            <LogoutIcon />
          </Link>
        </div>
      </div>
      <MessageList showPicker={showPicker} />
      <Input showPicker={showPicker} setShowPicker={setShowPicker} />
    </div>
  );
};

export default Chat;
