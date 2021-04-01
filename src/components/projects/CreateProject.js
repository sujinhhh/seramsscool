import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

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
      <div className="signin-container">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <h5>새글 등록하기</h5>
          <div className="signin-input">
            <label htmlFor="title">제목</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="signin-input">
            <label htmlFor="content">내용</label>
            <textarea type="text" id="content" onChange={this.handleChange} />
          </div>

          <div className="signin-input">
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
