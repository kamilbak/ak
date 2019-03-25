import aquariumEvents from "./aquariumEvents";
import waterTests from "./waterTests";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  aquariumEvents,
  waterTests,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer
});
