import React from "react";
import "./home.scss";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
