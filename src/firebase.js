import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain:  process.env.REACT_APP_authDomain,
  projectId:  process.env.REACT_APP_projectId,
  storageBucket:  process.env.REACT_APP_storageBucket,
  messagingSenderId:  process.env.REACT_APP_messagingSenderId,
  appId:  process.env.REACT_APP_appId
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const firebaseExports = { auth,db, storage }; // Assign db and storage to a variable

export default firebaseExports; // Export the variable