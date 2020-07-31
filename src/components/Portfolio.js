import React, { Component } from "react";
import axios from "axios";

export default class Portfolio extends Component {
  // state = {
  //   post: null,
  // };
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios.get("http://jsonplaceholder.typicode.com/posts/" + id).then((res) => {
  //     this.setState({
  //       post: res.data,
  //     });
  //   });
  // }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h2 className="center">{this.state.post.title}</h2>
        <p className="center">{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center"> Loading post... </div>
    );

    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}
