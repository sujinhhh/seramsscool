import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Signedlink.css";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
  selectUserData,
} from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useEffect } from "react";

const SignedLinks = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    console.log(response);
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  return (
    <ul className="signedLinks">
      <Link to="/" className="left brand-logo">
        <div className="logo">
          <img src="https://sujinhhh.github.io/deploy/mingle.png" alt="uncle" />
          <small>새.람.쓰.</small> 쿨~
        </div>
      </Link>
      <div className="right">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/study"> 수업</Link>
        </li>
        <li>
          <Link to="/exam"> 영어시험</Link>
        </li>
        <li>
          <Link to="/video">솰라솰라 비디오</Link>
        </li>
        <li>
          <Link to="/mypage">마이 페이지</Link>
        </li>
        <li>
          <Link to="/">
            {isSignedIn ? (
              <div className="signedIn-info">
                <div className="avatar">
                  <Avatar src={userData?.imageUrl} alt={userData?.name} />
                  <h5 className="signedIn-title">{userData?.givenName}</h5>
                </div>

                <GoogleLogout
                  clientId="622624101611-f42jvufneqkv0vf0nj47c4f6upv103da.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="logout-button"
                    >
                      로그아웃
                    </button>
                  )}
                  onLogoutSuccess={logout}
                />
              </div>
            ) : (
              ""
            )}
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default withRouter(SignedLinks);
