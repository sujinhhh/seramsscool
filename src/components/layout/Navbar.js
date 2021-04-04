import React from "react";
import { withRouter } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { selectSignedIn } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const NavBar = (props) => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <nav
      className="nav-waper red darken-3"
      variant="h1"
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        {isSignedIn ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
