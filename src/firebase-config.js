import { initializeApp } from "firebase/app";
import {getFireStore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyApdC-peNV1DV-hFJKwB7Bs979-CIrFkjQ",
    authDomain: "react-firebase-b2f9e.firebaseapp.com",
    projectId: "react-firebase-b2f9e",
    storageBucket: "react-firebase-b2f9e.appspot.com",
    messagingSenderId: "535131026737",
    appId: "1:535131026737:web:db402dc97793e30da7ac10",
    measurementId: "G-FBRYMH830R"
  };
   const app =initializeApp(firebaseConfig);
   export const db=getFireStore(app);