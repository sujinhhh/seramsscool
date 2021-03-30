import React, { Component } from "react";
import Study from "./Contact";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Study key={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
