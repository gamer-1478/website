import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBhyh_H5mTHi2MkQ24s4Hy5JJXFCxiGlOI",
    authDomain: "aayushwebsite-cf1b8.firebaseapp.com",
    projectId: "aayushwebsite-cf1b8",
    storageBucket: "aayushwebsite-cf1b8.appspot.com",
    messagingSenderId: "135208625419",
    appId: "1:135208625419:web:7b79211db5335483aeae0e",
    measurementId: "G-W0YPVRETLD"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export default app