import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA5q5ASahOdNxh4kp84jDQ-CVHeDDPHGU8",
  authDomain: "skpromotion-26c19.firebaseapp.com",
  projectId: "skpromotion-26c19",
  storageBucket: "skpromotion-26c19.appspot.com",
  messagingSenderId: "199010765188",
  appId: "1:199010765188:web:95ad69f7f639f5559d35d1",
  measurementId: "G-WWZQHZK550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
