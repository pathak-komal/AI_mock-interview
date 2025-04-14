// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAhUOB99YcdXHsROhMS9Ca-1qJGkQA1k",
  authDomain: "prepview-dc985.firebaseapp.com",
  projectId: "prepview-dc985",
  storageBucket: "prepview-dc985.firebasestorage.app",
  messagingSenderId: "342726052228",
  appId: "1:342726052228:web:fdaa68ed766edb9f86f5d1",
  measurementId: "G-XDTF5NKHXY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
