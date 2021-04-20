import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { selectSignedIn } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { Menu, MenuItem, ListItemText } from "@material-ui/core";
import { MenuTwoTone, AccessAlarm, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "./Navbar.css";
import "./Link.css";

const NavBar = (props) => {
  const isSignedIn = useSelector(selectSignedIn);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  }, []);

  const handleClick = (event) => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="left brand-logo" onClick={closeMobileMenu}>
        <div className="logo">
          <img src="http://sulbi.link/images/aa.gif" alt="uncle" />
          <small>Seramss</small> Cool~
        </div>
      </Link>

      <div>
        {isSignedIn ? (
          <SignedInLinks close={closeMobileMenu} click={click} />
        ) : (
          <SignedOutLinks close={closeMobileMenu} click={click} />
        )}
      </div>
      <sapn
        className={button ? "menu__icon" : "menu__icon hide"}
        onClick={handleClick}
      >
        {click ? <Close fontSize="large" /> : <MenuTwoTone fontSize="large" />}
      </sapn>
    </nav>
  );
};

export default withRouter(NavBar);
