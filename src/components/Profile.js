import React from "react";
import "./Test.css";
import { AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Test = () => {
  return (
    <main className="card-container">
      <div className="infor-container">
        {/* photo */}
        <div className="photo">
          <img src="./profile.png" alt="" />
          <div className="name">
            <h2>Sujin Lee</h2>
            <h4>Frontend Developer</h4>
            <h6>mail@mail.com</h6>
          </div>
        </div>
        {/* button */}
        <div className="button">
          <button>
            <HiMail />
            <span>Email</span>
          </button>
          <button>
            <AiFillLinkedin />
            <span>LinkedIn</span>
          </button>
        </div>
        {/* about */}
        <div className="about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laudantium explicabo deserunt quaerat error nihil ullam maxime ipsum
            excepturi. Quos numquam, praesentium fugit quam a illo qui accusamus
            placeat expedita.
          </p>
        </div>
        {/* interest */}
        <div className="interest">
          <h3>Interest</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laudantium explicabo deserunt quaerat error nihil ullam maxime ipsum
            excepturi. Quos numquam, praesentium fugit quam a illo qui accusamus
            placeat expedita.
          </p>
        </div>
        {/* social */}
        <div className="social"></div>
      </div>
    </main>
  );
};

export default Test;
