// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD95jCmCHzUHkPcKvlV9QuhBJdAlmhBTdU",
    authDomain: "todo-151a4.firebaseapp.com",
    projectId: "todo-151a4",
    storageBucket: "todo-151a4.firebasestorage.app",
    messagingSenderId: "1035371296211",
    appId: "1:1035371296211:web:5f4f87137d1f8da569ab26",
    measurementId: "G-FBZ8RRBHJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;