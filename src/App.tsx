import React, { useContext, useEffect } from "react";
import "./style.scss";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import { connectStorageEmulator } from "firebase/storage";

function App() {
  const currentUser: any = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route
            index
            element={
              currentUser ? <Login/> : <Home/>
            }
          />
          <Route path="chat" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
