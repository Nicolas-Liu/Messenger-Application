import React from "react";
import SideBarChats from "./SideBarChats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <SideBarChats />
    </div>
  );
};

export default Sidebar;
