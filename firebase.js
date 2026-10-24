
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBJoDCHcx7tcQSqtMn5leOiiDo6xAHplSc",
  authDomain: "mycochamber.firebaseapp.com",
  projectId: "mycochamber",
  storageBucket: "mycochamber.firebasestorage.app",
  messagingSenderId: "21661693086",
  appId: "1:21661693086:web:948c896ff2e3c76974f78f",
  measurementId: "G-9RREJGEPY3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const firebaseReady = signInAnonymously(auth)
  .then((credential) => {
    console.log(
      "Firebase connected. Anonymous sign-in successful."
    );
    return credential.user;
  })
  .catch((error) => {
    console.error("Firebase connection failed:", error);
    throw error;
  });
