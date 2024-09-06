// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "expense-tracker-e91b8.firebaseapp.com",
  projectId: "expense-tracker-e91b8",
  storageBucket: "expense-tracker-e91b8.appspot.com",
  messagingSenderId: "840875982038",
  appId: "1:840875982038:web:08b8b82928dfc0c7505d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();