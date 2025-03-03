// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCh-B0IiPmW2K1DlGMw--VVzrr9qib_Vdo",
  authDomain: "recipe-application-b796d.firebaseapp.com",
  projectId: "recipe-application-b796d",
  storageBucket: "recipe-application-b796d.firebasestorage.app",
  messagingSenderId: "747922474777",
  appId: "1:747922474777:web:f370ed811edc28d3252788",
  measurementId: "G-LYC8K1QZL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);