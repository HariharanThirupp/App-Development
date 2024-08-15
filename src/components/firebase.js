import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateEmail, updatePassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAv0V_U6KDzhMJ8-jGbWWU2dQimY4l7LEA",
    authDomain: "shopp-39d64.firebaseapp.com",
    projectId: "shopp-39d64",
    storageBucket: "shopp-39d64.appspot.com",
    messagingSenderId: "880094400972",
    appId: "1:880094400972:web:a514b00928cc4114978d69",
    measurementId: "G-KJ8BTLWMLG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  getFirestore,
  collection,
  addDoc
};
