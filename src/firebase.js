// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8IvbNtAx6v_CDbZvAT2ZtnWiDhjc174",
  authDomain: "centralauth-4124b.firebaseapp.com",
  projectId: "centralauth-4124b",
  storageBucket: "centralauth-4124b.firebasestorage.app",
  messagingSenderId: "408830566670",
  appId: "1:408830566670:web:a8822155ecb0e5c166b75f",
  measurementId: "G-XKCGLTFT8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Analytics
//const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
