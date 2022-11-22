import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { IconButton, InputAdornment } from "@mui/material";

const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      setTimeout(() => {
        setError(false);
      }, 4500);
    }
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
      <div className="error-alert">
        {error && <Alert severity="error">Something went wrong</Alert>}
      </div>
      <div className="formWrapper">
        <span className="title">Connect with your friends</span>
        <span className="subtitle">Login</span>
        <form onSubmit={handleSubmit}>
          {/* TODO: password input dots */}
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" type={showPassword ? "text" : "password"} variant="standard" 
           InputProps={{ 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          />

          <Button variant="outlined" type="submit">
            Sign in
          </Button>
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
