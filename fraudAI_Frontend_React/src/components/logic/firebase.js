// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPZlh0JJpHeqXwrkTkw4Wj6OLtv18ZBXo",
  authDomain: "temp-aaditya.firebaseapp.com",
  projectId: "temp-aaditya",
  storageBucket: "temp-aaditya.firebasestorage.app",
  messagingSenderId: "108288444420",
  appId: "1:108288444420:web:8e970e2779b9f1de264d51",
  measurementId: "G-WVNHBEXJQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
