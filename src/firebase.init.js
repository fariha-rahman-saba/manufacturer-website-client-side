// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMFzLMGmAU7hg_3_WojgJvI8RntJywHug",
    authDomain: "tools-manufacturer-2992e.firebaseapp.com",
    projectId: "tools-manufacturer-2992e",
    storageBucket: "tools-manufacturer-2992e.appspot.com",
    messagingSenderId: "596257503790",
    appId: "1:596257503790:web:338733adf8f536e8b93dbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;