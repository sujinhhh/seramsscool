import React, { useRef, useState } from "react";
import "../../scss/company.scss";

const CompanyRoot = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <div className="companyRoot">
      <header>
        <div className="companyRoot__menu" onClick={toggleMenu}>
          <span
            className={
              showMenu ? "companyRoot__burger open" : "companyRoot__burger"
            }
          ></span>
        </div>
        <div
          className={showMenu ? "companyRoot__nav open" : "companyRoot__nav "}
        >
          <ul className={showMenu ? "open" : ""}>
            <li className="companyRoot__item">
              <a href="#about">About us</a>
            </li>
            <li className="companyRoot__item">
              <a href="#teacher">Instructor</a>
            </li>
            <li className="companyRoot__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="article">
          <h1>설명</h1>
        </div>
      </main>
    </div>
  );
};

export default CompanyRoot;
