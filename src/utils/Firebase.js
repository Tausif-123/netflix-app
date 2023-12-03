// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWgNHteX5DNukIwwT5GMJqQfSYpYXDTx0",
  authDomain: "netflixgpt-72735.firebaseapp.com",
  projectId: "netflixgpt-72735",
  storageBucket: "netflixgpt-72735.appspot.com",
  messagingSenderId: "1079574877658",
  appId: "1:1079574877658:web:e99b5c1dba53fef8c49ce3",
  measurementId: "G-ZCDW0BH4GB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// All will be saved inside the auth function...
export const auth = getAuth();
// console.log(auth);
