// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDDpZdBzes6UvYLIIdHx5d-NzOQ9fxrIc",
  authDomain: "netfixgpt-dcae7.firebaseapp.com",
  projectId: "netfixgpt-dcae7",
  storageBucket: "netfixgpt-dcae7.firebasestorage.app",
  messagingSenderId: "904781100238",
  appId: "1:904781100238:web:4ac36215dab6b8c1948c9f",
  measurementId: "G-V9NQ0VCES4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();