// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ec8bf.firebaseapp.com",
  projectId: "mern-blog-ec8bf",
  storageBucket: "mern-blog-ec8bf.appspot.com",
  messagingSenderId: "836310943680",
  appId: "1:836310943680:web:5a4265f348c3d6a2e52a25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);