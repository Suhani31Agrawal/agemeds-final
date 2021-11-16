
  import firebase from 'firebase';
require('@firebase/firestore')

// Initialize Firebase
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyCSrKVAlwKnnOy8ii4XXZ4swryUxrrMnm0",
  authDomain: "agemeds-d3c82.firebaseapp.com",
  projectId: "agemeds-d3c82",
  storageBucket: "agemeds-d3c82.appspot.com",
  messagingSenderId: "292666394586",
  appId: "1:292666394586:web:5126ad3c3378e5f2d1a2e3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();