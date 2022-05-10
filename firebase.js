import firebase from 'firebase';
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD1QLI5FmrawuL1nCakBro27RsyptWlins",
  authDomain: "facebook-clone2627.firebaseapp.com",
  projectId: "facebook-clone2627",
  storageBucket: "facebook-clone2627.appspot.com",
  messagingSenderId: "951536611533",
  appId: "1:951536611533:web:02721a19a8925e4cf0f984"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :firebase.app();

const db