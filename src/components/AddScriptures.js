import React, { Component } from "react";

class AddScriptures extends Component {
  state = {
    Number: "",
    Name: "",
    Chapter: "",
    Verse: "",
    Conternts: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addScrip(this.state);
    this.setState({
      Conternts: "",
    });
  };

  render() {
    return (
      <div>
        <form className="responsive-table" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="Name"
            onChange={this.handleChange}
            value={this.state.Name}
          />
          <label htmlFor="name">Chapter:</label>
          <input
            type="text"
            id="Chapter"
            onChange={this.handleChange}
            value={this.state.Chapter}
          />
          <label htmlFor="name">Verse:</label>
          <input
            type="text"
            id="Verse"
            onChange={this.handleChange}
            value={this.state.Verse}
          />
          <label htmlFor="name">Contents:</label>
          <input
            type="text"
            id="Conternts"
            onChange={this.handleChange}
            value={this.state.Conternts}
          />
          <button className="btn waves-effect waves-light">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddScriptures;
