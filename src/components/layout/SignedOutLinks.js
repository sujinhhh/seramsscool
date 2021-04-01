import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const SignedOut = () => {
  return (
    <ul className="signoutLinks">
      <Link to="/" className="left brand-logo">
        새.람.하 <small>스쿨</small>
      </Link>
      <div className="right">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/exam"> 새람하 스쿨 소개</Link>
        </li>
        <li>
          <Link to="/exam"> 선생님 소개 </Link>
        </li>
        <li>
          <Link to="/contact"> 발표</Link>
        </li>
        <li>
          <Link to="/signin"> 로그인하기</Link>
        </li>
        <li>
          <Link to="/signup"> Sign Up </Link>
        </li>
        <li>
          <Link to="/study" className="btn">
            새람
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default withRouter(SignedOut);
