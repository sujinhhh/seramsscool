import React, { Component } from "react";
import "./todos.css";

class AddForm extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodos(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <label>New Todos</label>
          <input
            className="input"
            placeholder="여기에 아무말이나 적어보세요"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddForm;
