// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACrjrFM8U9y70eeS85W5ECVt-l7tdHYBU",
  authDomain: "my-blog-app-a5098.firebaseapp.com",
  projectId: "my-blog-app-a5098",
  storageBucket: "my-blog-app-a5098.appspot.com",
  messagingSenderId: "732014841736",
  appId: "1:732014841736:web:080c73e0914bcc48bab43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}