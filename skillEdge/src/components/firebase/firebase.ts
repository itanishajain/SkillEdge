import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhniAu_CMmHAET3V0Kb8kWM-Tb8FPKbVA",
  authDomain: "skilledge-cd82d.firebaseapp.com",
  projectId: "skilledge-cd82d",
  storageBucket: "skilledge-cd82d.appspot.com",
  messagingSenderId: "276253205895",
  appId: "1:276253205895:web:79705f3b54517035301f22",
  measurementId: "G-7SCVSV7C76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword }; 