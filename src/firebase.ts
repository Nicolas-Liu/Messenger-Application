// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-SlVE16CW0P7Lu0-yvN9jhERNXf6YQAU",
  authDomain: "chat-f65ed.firebaseapp.com",
  projectId: "chat-f65ed",
  storageBucket: "chat-f65ed.appspot.com",
  messagingSenderId: "790434673092",
  appId: "1:790434673092:web:44cb32fdda02a6f5e4b491"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();