import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const SignedLinks = () => {
  return (
    <ul className="signedLinks">
      <Link to="/" className="left brand-logo">
        새람쓰~<small>쿨</small>
      </Link>
      <div className="right">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/exam"> 수업</Link>
        </li>
        <li>
          <Link to="/exam"> 영어시험</Link>
        </li>
        <li>
          <Link to="/contact"> 발표</Link>
        </li>
        <li>
          <Link to="/create"> 과제</Link>
        </li>
        <li>
          <Link to="/"> Log Out</Link>
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

export default withRouter(SignedLinks);
