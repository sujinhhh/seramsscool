import firebase from "firebase/app";
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
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();

// .settings({ timestampsInSnapshots: true });

export default firebase;
