import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./Video.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title"></h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
