import React, { Component } from "react";
import "./Home.css";
import TodoRoot from "./todoApp/TodoRoot";
import GameMain from "./game/GameMain";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home__board">
          <TodoRoot />
        </div>
        <div className="home__game">
          <GameMain />
        </div>
      </div>
    );
  }
}

export default Home;
