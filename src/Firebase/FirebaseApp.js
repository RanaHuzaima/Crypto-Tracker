import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const FirebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(FirebaseApp);
const db = getFirestore(FirebaseApp);

export { auth, db };
