import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //TODO: add pop up for err state.
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("target", e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            console.log("redirect");
            navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
            // setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4500)
      // setLoading(false);
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

      <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success. Thank you!
        </Alert>
      </Snackbar>
      <div className="error-alert">
      {error && <Alert severity="error">Something went wrong</Alert>}
      </div>
     

      <div className="formWrapper">
        <span className="title">Connect with your friends</span>
        <span className="subtitle">Register</span>
        <form onSubmit={handleSubmit}>
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
          <Button variant="outlined" type="submit">
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
