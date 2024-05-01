// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJP-3JgdiFK6DGxXPdtnJ_n46_xrP8Z68",
  authDomain: "netflixgpt-bd4ea.firebaseapp.com",
  projectId: "netflixgpt-bd4ea",
  storageBucket: "netflixgpt-bd4ea.appspot.com",
  messagingSenderId: "142574923013",
  appId: "1:142574923013:web:12fc551a735b0f93bfdb6c",
  measurementId: "G-65EEKSMVK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();