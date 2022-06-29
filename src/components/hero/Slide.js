import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Slide() {
  const [img, setImage] = useState([
    { url: "./img01.png" },
    { url: "./img02.png" },
    { url: "./img03.png" },
    { url: "./img04.png" },
    { url: "./img05.png" },
    { url: "./img06.png" },
  ]);
  return (
    <div className="slide-container">
      <h2>Our Partners</h2>
      <div className="cert">
        {img.map((item, idex) => {
          return (
            <div key={idex}>
              <img src={item.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slide;
