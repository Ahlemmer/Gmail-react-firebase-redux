
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore'
import{getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth()
const proivder=new GoogleAuthProvider

export{db,app,auth,proivder}
    
