// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB300UR1dEyDq0PL5EhH6vSOkhjfAufI8E",
    authDomain: "quer-7898.firebaseapp.com",
    projectId: "quer-7898",
    storageBucket: "quer-7898.appspot.com",
    messagingSenderId: "625082967976",
    appId: "1:625082967976:web:be10d1ed1156650a491f9d",
    measurementId: "G-R0SQYBMC78"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore()

  export {auth, provider}

  export default db
  