// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPXaohXgx3ctV0UcERYF6nP-aOA8xMspQ",
  authDomain: "estate-12994.firebaseapp.com",
  projectId: "estate-12994",
  storageBucket: "estate-12994.appspot.com",
  messagingSenderId: "58929192953",
  appId: "1:58929192953:web:000b64731c4359c33a2728",
  measurementId: "G-CT877P4EH3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
