// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAMrJu8jukN9jRTGKabtqDD84xuCrWlH0",
  authDomain: "fir-login-2bdf8.firebaseapp.com",
  projectId: "fir-login-2bdf8",
  storageBucket: "fir-login-2bdf8.appspot.com",
  messagingSenderId: "835910311443",
  appId: "1:835910311443:web:c7c9a71d0b5c1bbdc9e9e6",
  measurementId: "G-DH9NWNDE1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
