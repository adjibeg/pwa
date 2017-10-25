import firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHOdlxsKcpctMkNzDv3F3OrQEPKqP5_3A",
    authDomain: "pwa-presentation-a71c5.firebaseapp.com",
    databaseURL: "https://pwa-presentation-a71c5.firebaseio.com",
    projectId: "pwa-presentation-a71c5",
    storageBucket: "",
    messagingSenderId: "816138001590"
  };

firebase.initializeApp(config);

export default firebase;

export const db = firebase.database();