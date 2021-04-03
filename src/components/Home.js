import React, { Component } from "react";
import "./Home.css";
import TodoRoot from "./todoApp/TodoRoot";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <section>
          <TodoRoot />
        </section>
      </div>
    );
  }
}

export default Home;
