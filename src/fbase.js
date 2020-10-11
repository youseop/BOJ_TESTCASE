import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0vz2LVqsLxP88JIZ4d8805YK4aAB59Kk",
    authDomain: "boj-testcase.firebaseapp.com",
    databaseURL: "https://boj-testcase.firebaseio.com",
    projectId: "boj-testcase",
    storageBucket: "boj-testcase.appspot.com",
    messagingSenderId: "101531343798",
    appId: "1:101531343798:web:114def435ba6176857bf17",
    measurementId: "G-BM7FVDDLQP"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
