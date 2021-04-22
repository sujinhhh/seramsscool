import React, { useRef, useState } from "react";
import GoogleLogin from "react-google-login";
import { auth } from "../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../../features/userSlice";

import "./SignInUp.css";
import { authIsReady } from "react-redux-firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const resister = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          dispatch(
            setSignedIn({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
          );
        });
    });
  };

  return (
    <div className="signin">
      <div class="signin__container">
        <div className="login__header">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/08/19/08/castle-1083570_1280.png"
            alt=""
          />
          <h3>Log In</h3>
        </div>
        <form class="col s12 ">
          <div class="">
            <div class="input-field col s6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="first_name"
                type="text"
                class="validate"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div class="">
            <div class="input-field col s12">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                class="validate"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="">
            <div class="input-field col s12">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                class="validate"
                placeholder="Email"
              />
            </div>
          </div>
        </form>
        <button className="btn" onClick={loginToApp}>
          Log In
        </button>
        <div className="signin__signup">
          <span>Not a member?</span>
          <span onClick={resister}>Resister now</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
