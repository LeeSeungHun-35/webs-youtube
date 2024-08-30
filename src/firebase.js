// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmRqPGlObzO-FNW_zWy-O0eHcIz2Z8JJk",
  authDomain: "fir-7cf9e.firebaseapp.com",
  projectId: "fir-7cf9e",
  storageBucket: "fir-7cf9e.appspot.com",
  messagingSenderId: "937939129519",
  appId: "1:937939129519:web:9b34431284d1307c8b705a",
  measurementId: "G-D2MGBKK77B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);