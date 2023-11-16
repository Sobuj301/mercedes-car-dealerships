// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDF8vHhFkcuhMkMWTAteQTP0RY1NVkuE",
  authDomain: "mercedes-car-dealerships.firebaseapp.com",
  projectId: "mercedes-car-dealerships",
  storageBucket: "mercedes-car-dealerships.appspot.com",
  messagingSenderId: "735655167061",
  appId: "1:735655167061:web:d2f623e9f2e9450b9040dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;