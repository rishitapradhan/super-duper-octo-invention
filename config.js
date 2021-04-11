import firebase from 'firebase'
require('@firebase/firestore') 

var firebaseConfig = {
    apiKey: "AIzaSyB7YUB-lr3aXUNm70vNpm-8zj5vK839tEI",
    authDomain: "barter-system-cb554.firebaseapp.com",
    projectId: "barter-system-cb554",
    storageBucket: "barter-system-cb554.appspot.com",
    messagingSenderId: "232076525294",
    appId: "1:232076525294:web:87e89d82bcf58d8adebdff",
    measurementId: "G-XBT7LDEDLP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
  