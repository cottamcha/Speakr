import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAlj_6uupg7vVLd-o6wNMnkmhexMbZKm38",
  authDomain: "glider-7e163.firebaseapp.com",
  projectId: "glider-7e163",
  storageBucket: "glider-7e163.appspot.com",
  messagingSenderId: "344974303918",
  appId: "1:344974303918:web:604c4ff1f5a4af26b4833f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
