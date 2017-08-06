import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyBCL-ZO1A7U7lWGDnpkjw-0Fb1ssAloaB8",
    authDomain: "playproject-5f84b.firebaseapp.com",
    databaseURL: "https://playproject-5f84b.firebaseio.com",
    projectId: "playproject-5f84b",
    storageBucket: "playproject-5f84b.appspot.com",
    messagingSenderId: "253978312840"
  };
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth()
export const firebaseDatabase = firebase.database();
export default firebase