// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsMzlcGBsmSMAae2jW6U66qGJSQ2LJ8KE",
    authDomain: "bloging-app-b9a69.firebaseapp.com",
    projectId: "bloging-app-b9a69",
    storageBucket: "bloging-app-b9a69.firebasestorage.app",
    messagingSenderId: "267638596116",
    appId: "1:267638596116:web:00492320d5c1a872663d01",
    measurementId: "G-04L3LZMQNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);