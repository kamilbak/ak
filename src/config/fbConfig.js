import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAy1mvuP2NcHZ_-F3vMH7XKKsxulF730PI",
  authDomain: "akwa2-553a6.firebaseapp.com",
  databaseURL: "https://akwa2-553a6.firebaseio.com",
  projectId: "akwa2-553a6",
  storageBucket: "akwa2-553a6.appspot.com",
  messagingSenderId: "264418538997"
};
// var config = {
//   apiKey: "AIzaSyAn8vH9GhUVZvTIDHC4Vg9SxqsfS173SmE",
//   authDomain: "akwa-apka.firebaseapp.com",
//   databaseURL: "https://akwa-apka.firebaseio.com",
//   projectId: "akwa-apka",
//   storageBucket: "akwa-apka.appspot.com",
//   messagingSenderId: "168262312947"
// };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
