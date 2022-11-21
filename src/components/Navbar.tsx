import React, { useContext } from "react";
import picture from "../assets/profile-pic.jpg";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
  const {currentUser}:any = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
