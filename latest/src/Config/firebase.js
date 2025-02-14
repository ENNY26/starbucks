import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc
} from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCHaIczFXWySwNEgDowkHB-9ZCh5vlDaxc",
  authDomain: "how-to-starbucks.firebaseapp.com",
  projectId: "how-to-starbucks",
  storageBucket: "how-to-starbucks.firebasestorage.app",
  messagingSenderId: "903170386391",
  appId: "1:903170386391:web:ac2025aef95f444affc392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup Function
const signup = async (username, email, password, navigate) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    // Store user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: ""
    });

    navigate("/search-page"); // Redirect after signup
  } catch (error) {
    console.error("Signup Error:", error.message);
    alert(error.message); // Display error message
  }
};

// Login Function
const login = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/search-page"); // Redirect after login
  } catch (error) {
    console.error("Login Error:", error.message);
    alert(error.message); // Display error message
  }
};

export { signup, login, auth };
