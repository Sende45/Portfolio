// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 1. AJOUT : Import du service Firestore
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTos7IPtsTc45-ASVRuaVgJK2f68xrY-s",
  authDomain: "portefolio-sende.firebaseapp.com",
  projectId: "portefolio-sende",
  storageBucket: "portefolio-sende.firebasestorage.app",
  messagingSenderId: "161447600777",
  appId: "1:161447600777:web:adc715b002eaa944609c58",
  measurementId: "G-N2YQ91HWS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. MODIF : Initialisation et EXPORT du service Database
export const db = getFirestore(app);