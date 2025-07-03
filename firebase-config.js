// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTodfBz4D-oJi416lIo5KU__nS8xgpBHk",
  authDomain: "shree-ram-267f1.firebaseapp.com",
  databaseURL: "https://shree-ram-267f1-default-rtdb.firebaseio.com",
  projectId: "shree-ram-267f1",
  storageBucket: "shree-ram-267f1.firebasestorage.app",
  messagingSenderId: "124553682665",
  appId: "1:124553682665:web:acb264d9e493a613315a78",
  measurementId: "G-HTP6N2GS17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);