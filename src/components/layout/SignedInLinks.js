import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./Link.css";
import { login, logout, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useEffect } from "react";
import { auth } from "../../config/fbConfig";

const SignedLinks = ({ close, click }) => {
  const user = useSelector(selectUser);
  const history = useHistory();

  const logout = () => {
    auth.signOut();
  };

  return (
    <ul className="signedLinks">
      <div className={click ? "nav-menu active" : "nav-menu"} onClick={close}>
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
          <Link to="/video">솰라솰라</Link>
        </li>
        <li>
          <Link to="/mypage">마이 페이지</Link>
        </li>
        <li>
          <Link to="/">
            {user ? (
              <div className="signedIn-info">
                <div className="avatar"></div>
                <button className="log-btn btn-1" onClick={logout}>
                  Log out
                </button>
                {/* 
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
                /> */}
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
