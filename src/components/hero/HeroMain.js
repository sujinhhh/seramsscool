import React from "react";
import Video from "./Video";
import { FaInfoCircle } from "react-icons/fa";
import Slide from "./Slide";
function HeroMain() {
  return (
    <div>
      <div className="help">
        <FaInfoCircle fontSize="2em" color="#fff" />
        <h4>Chat with me!</h4>
      </div>
      <Video />
      <Slide />
    </div>
  );
}

export default HeroMain;
