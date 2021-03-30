import React, { Component } from "react";

class Study extends Component {
  state = {
    count: 0,
    id: 3,
    names: ["kevin", "sujin", "Deborah"],
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    justifyContent: "center",
  };

  handleIncrement = (id) => {
    console.log(id);

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles}>{this.formatCount()}</span>
        <span>
          {this.state.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </span>
        <button
          onClick={() => this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Study;
