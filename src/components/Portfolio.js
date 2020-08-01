import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../action/postActions";
// import axios from "axios";  ㄷㅔ이터 다른 곳에서 구해 올때

class Portfolio extends Component {
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
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h2 className="center">{this.props.post.title}</h2>
        <p className="center">{this.props.post.body}</p>
        <div className="center">
          <button className="bnt grey" onClick={this.handleClick}>
            Delete
          </button>
        </div>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
