import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../../features/userSlice";

const SignIn = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div
      className="signin-container"
      style={{ display: isSignedIn ? "none" : "" }}
    >
      {!isSignedIn ? (
        <div>
          <GoogleLogin
            clientId="622624101611-f42jvufneqkv0vf0nj47c4f6upv103da.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // className="login-button"
              >
                로그인 하기
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignIn;
