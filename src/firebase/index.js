// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth, GoogleAuthProvider} from "firebase/auth"; // auth importu bu 
 import { getFirestore } from "firebase/firestore"; //database importu

const firebaseConfig = {
  apiKey: "AIzaSyCXM9Xie4Oq_RswDRwDvxfZc37KmeUYvgc",
  authDomain: "chat-app-282aa.firebaseapp.com",
  projectId: "chat-app-282aa",
  storageBucket: "chat-app-282aa.firebasestorage.app",
  messagingSenderId: "819426374163",
  appId: "1:819426374163:web:d601cf29982d9f5f5105e6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);