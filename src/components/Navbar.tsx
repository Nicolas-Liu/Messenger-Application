import React from "react";
import Button from "@mui/material/Button";
import picture from "../assets/profile-pic.jpg";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img src={picture} alt="" />
        <span>Name</span>
        <Link to="/login" className="linkRouter">
          {/* <Button variant="outlined">Logout</Button> */}
          <LogoutIcon/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
