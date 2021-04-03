import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = (props) => {
  // 2초 뒤에 자동으로 이전 페이지로 가기 *****
  // setTimeout(() => {
  //   props.history.push("./bible");
  // }, 2000);
  return (
    <nav className="nav-waper red darken-3">
      <div className="container">
        <SignedInLinks />
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
