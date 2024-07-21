// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const clientCredentials= {
  apiKey: "AIzaSyAcJEwBgwJ-JuPYsZ-gDyaU6uP-1_I92vQ",
  authDomain: "cookiecutter-47929.firebaseapp.com",
  projectId: "cookiecutter-47929",
  storageBucket: "cookiecutter-47929.appspot.com",
  messagingSenderId: "1088428268671",
  appId: "1:1088428268671:web:7b506351d61e61b2e2f34a"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}
