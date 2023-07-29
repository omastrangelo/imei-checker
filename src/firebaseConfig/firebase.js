// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOC01yTNAEnzXh_Qp5pIur28sYI7JM-8k",
  authDomain: "imei-checker-6e3f9.firebaseapp.com",
  projectId: "imei-checker-6e3f9",
  storageBucket: "imei-checker-6e3f9.appspot.com",
  messagingSenderId: "333000641950",
  appId: "1:333000641950:web:ede5399dbd739d03325a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app)
