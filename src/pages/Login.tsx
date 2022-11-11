import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Connect with your loved ones</span>
        <span>Login</span>
        <form>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          {/* need to add authentication with firebase */}
          <Link to="/" className="linkRouter">
            <Button variant="outlined">Sign in</Button>
          </Link>
        </form>
        <p>
          Need an account?{" "}
          <Link to="/register" className="linkRouter">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
