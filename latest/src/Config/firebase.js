import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getFirestore, setDoc } from "firebase/firestore"

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
const auth = getAuth(app)
const db = getFirestore(app)

const signup =  async (username, email, password) => {

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await setDoc(doc(db, "users", user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email, 
      name:""
      avatar:"",
    })
  } catch (error) {
    
  }
}