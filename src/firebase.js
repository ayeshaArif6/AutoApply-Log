import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_d_r7h5j8Zzao5QhaBcJgW_Xx0mtDqJA",
  authDomain: "autoapply-log.firebaseapp.com",
  projectId: "autoapply-log",
  storageBucket: "autoapply-log.firebasestorage.app",
  messagingSenderId: "804036107565",
  appId: "1:804036107565:web:df84bbbc45ecb3315487a4",
  measurementId: "G-S5WD98QWDS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
