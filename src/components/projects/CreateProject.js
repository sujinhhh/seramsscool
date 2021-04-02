import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import "./project.css";
import { TextareaAutosize } from "@material-ui/core";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="create-container">
        <form className="create-form" onSubmit={this.handleSubmit}>
          <h5>할말 있음</h5>
          <div className="create-input">
            <label htmlFor="title">제목</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="create-input">
            <label htmlFor="content">내용</label>
            <TextareaAutosize
              rowsMin={7}
              placeholder="Maximum 4 rows"
              type="text"
              id="content"
              onChange={this.handleChange}
              className="textarea"
            />
          </div>

          <div className="create-input">
            <button className="btn">등록하기</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
