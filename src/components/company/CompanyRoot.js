import React from "react";
import "../../scss/company.scss";

const CompanyRoot = () => {
  return (
    <div className="companyRoot">
      <header>
        <div className="companyRoot__nav">
          <span className="companyRoot__burger"></span>
        </div>
        <div className="companyRoot__menu">
          <ul>
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
