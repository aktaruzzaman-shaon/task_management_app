// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCghNesKeeTYs8NEZvDqWORKDMSvW1bzkA",
  authDomain: "taskmanagementapp-b698e.firebaseapp.com",
  projectId: "taskmanagementapp-b698e",
  storageBucket: "taskmanagementapp-b698e.appspot.com",
  messagingSenderId: "761357442842",
  appId: "1:761357442842:web:0fed8e2c6ac429e6a616a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;