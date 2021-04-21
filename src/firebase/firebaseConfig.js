import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyC8N4eGWQ_d_16icvdfPWDsRKgB4GQbJbY",
    authDomain: "smokerchat-d6962.firebaseapp.com",
    projectId: "smokerchat-d6962",
    storageBucket: "smokerchat-d6962.appspot.com",
    messagingSenderId: "354248883171",
    appId: "1:354248883171:web:fa6e93ccb41b1890c2fed6",
    measurementId: "G-LER3KT8WSH"
  })

  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export {firebase, auth, firestore}