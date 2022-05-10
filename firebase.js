
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1QLI5FmrawuL1nCakBro27RsyptWlins",
  authDomain: "facebook-clone2627.firebaseapp.com",
  projectId: "facebook-clone2627",
  storageBucket: "facebook-clone2627.appspot.com",
  messagingSenderId: "951536611533",
  appId: "1:951536611533:web:02721a19a8925e4cf0f984"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
