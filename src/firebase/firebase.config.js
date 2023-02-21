// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyBrbb-n2H7VnMie_XOdIzXb9MCwo-16v4A",
// authDomain: "dragon-news-4e333.firebaseapp.com",
// projectId: "dragon-news-4e333",
// storageBucket: "dragon-news-4e333.appspot.com",
// messagingSenderId: "490279921242",
// appId: "1:490279921242:web:a3f98e39e3bb96a1af5a63",
