import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuWDm8uNJwYZrfPg_YLbzRyMc0TSyVhzw",
  authDomain: "la-table-ronde.firebaseapp.com",
  projectId: "la-table-ronde",
  storageBucket: "la-table-ronde.firebasestorage.app",
  messagingSenderId: "846762387353",
  appId: "1:846762387353:web:21b289708e91e76cadd508",
  measurementId: "G-JCHK68XYB2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
