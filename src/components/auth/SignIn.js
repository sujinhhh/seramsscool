import React, { useRef, useState } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import "./SignInUp.css";
import { authIsReady } from "react-redux-firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const loginToApp = (e) => {
    history.push("/");
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user,
          })
        );
      })
      .catch((error) => console.warn(error.maessage));
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
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
          );
        })
        .catch((error) => alert(error));
    });
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <div className="login__header">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/08/19/08/castle-1083570_1280.png"
            alt=""
          />
          <h3>Log In</h3>
        </div>
        <form className="col s12 ">
          <div className="">
            <div className="input-field col s6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="first_name"
                type="text"
                className="validate"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="">
            <div className="input-field col s12">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="validate"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="">
            <div className="input-field col s12">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="validate"
                placeholder="Email"
              />
            </div>
          </div>
        </form>
        <button type="submit" className="btn" onClick={loginToApp}>
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
