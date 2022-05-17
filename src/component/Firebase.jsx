
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore'
import{getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCfSCwaVL4Th2PqzDK1e6jCLfXDttEOi6Q",
  authDomain: "clone-c7043.firebaseapp.com",
  projectId: "clone-c7043",
  storageBucket: "clone-c7043.appspot.com",
  messagingSenderId: "434320969048",
  appId: "1:434320969048:web:de44d1215c1caff83d292d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth()
const proivder=new GoogleAuthProvider

export{db,app,auth,proivder}
    