import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "zeiter-chat.firebaseapp.com",
  projectId: "zeiter-chat",
  storageBucket: "zeiter-chat.appspot.com",
  messagingSenderId: "757760503723",
  appId: "1:757760503723:web:72d5f78145e09c43eb6cee",
  measurementId: "G-QXM64DN5PZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
