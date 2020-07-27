import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //config goes here

  apiKey: "AIzaSyCfhrc8GJJHeJFX9vm01wLPHDt7sRGPYhQ",
  authDomain: "messenger-demo-e9754.firebaseapp.com",
  databaseURL: "https://messenger-demo-e9754.firebaseio.com",
  projectId: "messenger-demo-e9754",
  storageBucket: "messenger-demo-e9754.appspot.com",
  messagingSenderId: "962072101340",
  appId: "1:962072101340:web:70c0c7970548b9613dcf19",
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const sotrage = firebase.storage();

export { db };
