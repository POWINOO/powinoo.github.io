import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAFxYAsdDTvkNbe9c6trzosiJz2Ach7fFo",
//   authDomain: "stage-powinoo.firebaseapp.com",
//   projectId: "stage-powinoo",
//   storageBucket: "stage-powinoo.appspot.com",
//   messagingSenderId: "805921938231",
//   appId: "1:805921938231:web:c348eed4d9f404f88f58b2"
// };

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);