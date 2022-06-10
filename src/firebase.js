import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCOg3dQvuMkaOoTSkircfdUPjRHtVI72nE",

  authDomain: "s0hamn.github.io",

  projectId: "firechat-365e7",

  storageBucket: "firechat-365e7.appspot.com",

  messagingSenderId: "888483380219",

  appId: "1:888483380219:web:f9c73a73d610ce6f19295e",

  measurementId: "G-T73DZYTZVV"

    }
)

const db = firebaseApp.firestore();

const auth = firebase.auth()

export {db, auth}