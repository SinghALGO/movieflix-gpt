// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXpi2bVGrBpT7GG-6-QV2FBYKvRiTrlUQ",
  authDomain: "movieflix-gpt-940b8.firebaseapp.com",
  projectId: "movieflix-gpt-940b8",
  storageBucket: "movieflix-gpt-940b8.appspot.com",
  messagingSenderId: "778259298741",
  appId: "1:778259298741:web:b19480a24cb32ac60b41fc",
  measurementId: "G-RWE4WT70DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);