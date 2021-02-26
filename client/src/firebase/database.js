import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf-YadX-dq2XLydatt_u8zB1pvg3GeYqw",
    authDomain: "cardiomyopathy-9a07b.firebaseapp.com",
    projectId: "cardiomyopathy-9a07b",
    storageBucket: "cardiomyopathy-9a07b.appspot.com",
    messagingSenderId: "908282944355",
    appId: "1:908282944355:web:9e43933d78daef2ea71156"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {firebaseAuthentication, firebaseFireStore, timestamp};
