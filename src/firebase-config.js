import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA5VOQifBDaZ57r1AeE3wQUOqtk_tQ8SIY",
  authDomain: "gym-management-system-36a2a.firebaseapp.com",
  projectId: "gym-management-system-36a2a",
  storageBucket: "gym-management-system-36a2a.appspot.com",
  messagingSenderId: "237325599324",
  appId: "1:237325599324:web:5aec61f7f1b019859b5c99",
  measurementId: "G-49WCL11DWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


