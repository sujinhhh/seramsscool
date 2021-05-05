import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Link.css";
import { auth } from "../../config/fbConfig";

const SignedOut = ({ close, click }) => {
  const user = useSelector(selectUser);
  const history = useHistory();

  const login = () => {};
  return (
    <ul className="signoutLinks">
      <div className={click ? "nav-menu active" : "nav-menu"} onClick={close}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/company"> Company </Link>
        </li>
        <li>
          <Link to="/study"> English Programs </Link>
        </li>
        <li>
          <Link to="/exam"> Testing </Link>
        </li>
        <li>
          <Link to="/video"> Videos </Link>
        </li>

        <li>
          <Link to="/signin">
            {!user ? (
              <div>
                {/* <Link to="/signin"> */}
                <button className="log-btn btn-1" onClick={login}>
                  LogIn | SignUp
                </button>
                {/* </Link> */}
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

export default withRouter(SignedOut);
