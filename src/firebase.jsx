/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg5hvu6o9aHbyP8f-9lInH5YSF0weOnHk",
  authDomain: "chat-app-29a77.firebaseapp.com",
  projectId: "chat-app-29a77",
  storageBucket: "chat-app-29a77.appspot.com",
  messagingSenderId: "1013232726694",
  appId: "1:1013232726694:web:9b2fbedfa59fe06b41ba67",
  measurementId: "G-LEDGYN2GL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
