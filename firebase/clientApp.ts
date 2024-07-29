// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const clientCredentials= {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "cookiecutter-47929",
  storageBucket: "cookiecutter-47929.appspot.com",
  messagingSenderId: "1088428268671",
  appId: "1:1088428268671:web:7b506351d61e61b2e2f34a"
};

// Initialize Firebase
const app = initializeApp(clientCredentials)


export const auth = getAuth()
export const db = getFirestore()
