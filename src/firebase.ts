// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVkokEH4xrzda8l60dZIOIjrge3on8XSE",
  authDomain: "mhtd-2d116.firebaseapp.com",
  databaseURL: "https://mhtd-2d116-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mhtd-2d116",
  storageBucket: "mhtd-2d116.appspot.com",
  messagingSenderId: "78754018506",
  appId: "1:78754018506:web:c4255010c9648859c2f033"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const db = firebase.firestore
