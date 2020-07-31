import React, { Component } from "react";
import Bible from "./Test";
import AddScriptures from "./AddScriptures";

export default class App extends Component {
  state = {
    scriptures: [
      {
        number: "",
        name: "Roman",
        chapter: 7,
        verse: 21,
        Conternts: "",
        id: 1,
      },
      {
        number: "",
        name: "John",
        chapter: 17,
        verse: 14,
        Conternts: "",
        id: 2,
      },
      {
        number: "",
        name: "Jeremiah",
        chapter: 10,
        verse: 23,
        Conternts: "",
        id: 3,
      },
    ],
  };

  addScrip = (scrip) => {
    scrip.id = Math.random();
    let scrips = [...this.state.scriptures, scrip];
    this.setState({
      scriptures: scrips,
    });
  };
  deleteScrip = (id) => {
    let item = this.state.scriptures.filter((scrip) => {
      return scrip.id !== id;
    });
    this.setState({
      scriptures: item,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text"> Scripture to Remember</h1>
        <Bible
          scriptures={this.state.scriptures}
          deleteScrip={this.deleteScrip}
        />
        <AddScriptures addScrip={this.addScrip} />
      </div>
    );
  }
}
