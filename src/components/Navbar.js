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
          Sujin's Page
        </Link>
        <ul className="right">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About me</Link>
          </li>
          <li>
            <Link to="/bible"> Bible</Link>s
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
