import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAF-i3LKXHa6tbS5vEN1_kzrn_6L_i8C-w",
  authDomain: "seramschool.firebaseapp.com",
  projectId: "seramschool",
  storageBucket: "seramschool.appspot.com",
  messagingSenderId: "677694689701",
  appId: "1:677694689701:web:9556b211593b8a04fa984c",
  measurementId: "G-E7Y7TX7DL4",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseStore = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();

// .settings({ timestampsInSnapshots: true });

export { firebaseStore, auth, authProvider, firebaseApp };
