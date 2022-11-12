import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Alert from "@mui/material/Alert";

const Register = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="formContainer">
      <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success. Thank you!
        </Alert>
      </Snackbar>

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
          <Button variant="outlined" onClick={handleClick}>
            Sign up
          </Button>
        </form>
        <p>
          Got an account?
          <Link to="/login" className="linkRouter">
            <span> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
