import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { firebaseApp } from "./config/fbConfig";
import firebase from "firebase/app";

const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(
  rootReducer,
  // compose(
  //   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  //   reduxFirestore(firebaseApp) // redux bindings for firestore
  // )
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);
// const rrfProps = {
//   firebaseApp,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance, // <- needed if using firestore
// };

ReactDOM.render(
  <Provider store={store}>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
    <App />
    {/* </ReactReduxFirebaseProvider> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
