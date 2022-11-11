import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Connect with your loved ones</span>
        <span>Login</span>
        <form>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />

          <Button variant="outlined">Sign up</Button>
        </form>
        <p>Need an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
