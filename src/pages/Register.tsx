import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Connect with your loved ones</span>
        <span>Register</span>
        <form>
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />

          <input
            type="file"
            id="file"
            style={{
              margin: "15px 0px",
              paddingBottom: "6px",
              display: "none",
            }}
          />
          <label htmlFor="file">
            <img
            className="image-logo"
              src="https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png"
              alt="Add avatar"
            />
            <span>Add an avatar</span>
          </label>
          <Button variant="outlined">Sign up</Button>
        </form>
        <p>Got an account? Login in</p>
      </div>
    </div>
  );
};

export default Register;
