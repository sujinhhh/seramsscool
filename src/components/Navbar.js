import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavBar = (props) => {
  // 2초 뒤에 자동으로 이전 페이지로 가기 *****
  // setTimeout(() => {
  //   props.history.push("./bible");
  // }, 2000);
  return (
    <nav className="nav-waper red darken-3">
      <div className="container">
        <Link to="/" className="left brand-logo">
          새.람.하 <small>스쿨</small>
        </Link>
        <ul className="right">
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
            <Link to="/study"> 과제</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
