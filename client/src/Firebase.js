// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
authDomain: "mern-blog-b4903.firebaseapp.com",
projectId: "mern-blog-b4903",
storageBucket: "mern-blog-b4903.appspot.com",
messagingSenderId: "312376454065",
appId: "1:312376454065:web:a24f5763b0d14a18dd2b90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);