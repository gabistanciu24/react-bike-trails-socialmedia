// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "biketrails-test.firebaseapp.com",
  projectId: "biketrails-test",
  storageBucket: "biketrails-test.appspot.com",
  messagingSenderId: "882937887807",
  appId: "1:882937887807:web:c414bbc9f4217b04350c8a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
