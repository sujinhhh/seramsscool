import React, { Component } from "react";
import GameMain from "./game/gameMain";
import HeroMain from "./hero/HeroMain";
import Steps from "./hero/Steps";
import "./Home.css";
import TodoRoot from "./todoApp/TodoRoot";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <HeroMain />
        <div className="home__board">
          <TodoRoot />
          <GameMain />
        </div>
        <Steps />
      </div>
    );
  }
}

export default Home;
