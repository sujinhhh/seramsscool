import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="signin-container">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className="signin-input">
            <label htmlFor="name">이름</label>
            <input type="name" id="name" onChange={this.handleChange} />
          </div>
          <div className="signin-input">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="signin-input">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="signin-input">
            <button className="btn">등록하기</button>
          </div>
        </form>
      </div>
    );
  }
}
