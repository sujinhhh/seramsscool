import React, { useRef, useState } from "react";
import "../../scss/styles.scss";
import { Link } from "react-router-dom";
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
              <a href="#instructor">Instructor</a>
            </li>
            <li className="companyRoot__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="article" id="about">
        <section>
          <div className="article__about">
            <h1>Number 1, Online Education</h1>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/11/01/37/back-to-school-2629361_1280.jpg"
              alt="school"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              libero cum dignissimos placeat quidem ea, repellat necessitatibus,
              velit tenetur aut ipsa beatae quas maiores, nostrum architecto
              quaerat nihil saepe veniam.
            </p>
          </div>
        </section>
        <section id="instructor">
          <div className="article__instructor">
            <h1>Instructor</h1>
            <Link to="/register">
              <div className="article__person">
                <h3>Mary</h3>
                <img
                  src="https://cdn.pixabay.com/photo/2019/01/06/15/02/the-teacher-3917155_1280.jpg"
                  alt="teach"
                />

                <button className="btn ">Sign up for class</button>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  optio, officia provident neque saepe ut. Sit quisquam porro ad
                  enim dolore sint ut vel. Minima architecto rem molestias eius
                  dignissimos!
                </p>
              </div>
            </Link>
            <Link to="/register">
              <div className="article__person">
                <h3>John</h3>
                <img
                  src="https://images.unsplash.com/photo-1601233749763-354ad977e784?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1595&q=80"
                  alt=""
                />

                <button className="btn">Sign up for class</button>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  optio, officia provident neque saepe ut. Sit quisquam porro ad
                  enim dolore sint ut vel. Minima architecto rem molestias eius
                  dignissimos!
                </p>
              </div>
            </Link>
            <Link to="/register">
              <div className="article__person">
                <h3>Blenda</h3>
                <img
                  src="https://images.unsplash.com/photo-1574320200632-4e123899b003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
                <button className="btn">Sign up for class</button>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  optio, officia provident neque saepe ut. Sit quisquam porro ad
                  enim dolore sint ut vel. Minima architecto rem molestias eius
                  dignissimos!
                </p>
              </div>
            </Link>
          </div>
        </section>
        <section id="contact">
          <div className="article__contact">
            <h1>Contact</h1>
            <img src="" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyRoot;
