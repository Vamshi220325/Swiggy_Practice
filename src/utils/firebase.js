// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaaDP9K6Pe2d2bqVCpVA73LXnvJlozJFM",
  authDomain: "swiggy-practice.firebaseapp.com",
  projectId: "swiggy-practice",
  storageBucket: "swiggy-practice.firebasestorage.app",
  messagingSenderId: "331843828835",
  appId: "1:331843828835:web:3f61a6b0c3d4a9f9908c56",
  measurementId: "G-XK99QWBQYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);