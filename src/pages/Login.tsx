import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("clicked");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login success");
      navigate("/");
    } catch (err) {
      console.log("login error:", err);
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Connect with your loved ones</span>
        <span>Login</span>
        <form onSubmit={handleSubmit}>
          {/* TODO: password input dots */}
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          {/* need to add authentication with firebase */}
          {/* <Link to="/" className="linkRouter">
            <Button variant="outlined">Sign in</Button>
          </Link> */}
          <button> Sign In</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>
          Need an account?{" "}
          <Link to="/register" className="linkRouter">
            <span>Register</span>
          </Link>
        </p>
      </div>
      <ul className="particles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Login;
