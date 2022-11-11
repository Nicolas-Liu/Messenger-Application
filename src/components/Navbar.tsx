import React from 'react';
import Button from "@mui/material/Button";
import picture from "../assets/profile-pic.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Logo</span>
        <div className="user">
            <img src={picture} alt="" />
            <span>Name</span>
            <Button variant="outlined">Logout</Button>
        </div>

    </div>
  )
}

export default Navbar