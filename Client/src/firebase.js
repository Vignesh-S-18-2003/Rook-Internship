import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBRkDSXO0mMUdsp7WQDLh8t_jxUs6JNx_c",
  authDomain: "verify-3f901.firebaseapp.com",
  projectId: "verify-3f901",
  storageBucket: "verify-3f901.appspot.com",
  messagingSenderId: "79974353974",
  appId: "1:79974353974:web:46af839db2b756aa851c97"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);