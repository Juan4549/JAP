// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firestore } from "firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRiwICq2y4lZCtsGTaPQyTIXD0aBKjVpE",
    authDomain: "appjap-daa4e.firebaseapp.com",
    projectId: "appjap-daa4e",
    storageBucket: "appjap-daa4e.appspot.com",
    messagingSenderId: "640042995225",
    appId: "1:640042995225:web:7422d8f00758366fc62488",
    measurementId: "G-WQFXQ8HZJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firestore();
export default {
    app,
    db
}