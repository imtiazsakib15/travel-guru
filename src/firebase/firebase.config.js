// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmm1DGSvGhFCyWaZDU62BHbF9pYOI4-Zk",
  authDomain: "auth-mohamilo.firebaseapp.com",
  projectId: "auth-mohamilo",
  storageBucket: "auth-mohamilo.appspot.com",
  messagingSenderId: "540084850503",
  appId: "1:540084850503:web:30690f1ff4ddda31248662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;