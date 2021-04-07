import React from "react";
import { Link, withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../../features/userSlice";
import "./Link.css";

const SignedOut = ({ close, click }) => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const logout = (response) => {
    console.log(response);
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  return (
    <ul className="signoutLinks">
      <div className={click ? "nav-menu active" : "nav-menu"} onClick={close}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/company"> 새람쓰~쿨 소개</Link>
        </li>
        <li>
          <Link to="/review"> 수강 후기 </Link>
        </li>
        <li>
          <Link to="/"> 발표</Link>
        </li>
        <li>
          {!isSignedIn ? (
            <div>
              <GoogleLogin
                clientId="622624101611-f42jvufneqkv0vf0nj47c4f6upv103da.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login-button"
                  >
                    로그인
                  </button>
                )}
                onSuccess={login}
                onFailure={logout}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          ) : (
            ""
          )}
        </li>
        {/* <li>
          <Link to="/signup"> Sign Up </Link>
        </li> */}
      </div>
    </ul>
  );
};

export default withRouter(SignedOut);
