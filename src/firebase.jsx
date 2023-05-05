import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBfXV6LeTkrrE8nqrK6e04KR8bJOoPH2so",
  authDomain: "clone-bbccf.firebaseapp.com",
  projectId: "clone-bbccf",
  storageBucket: "clone-bbccf.appspot.com",
  messagingSenderId: "342635068667",
  appId: "1:342635068667:web:25f99b7f58969a8571845e",
  measurementId: "G-988G6YXYVD"
});
 const auth = firebase.auth();

export {auth};




