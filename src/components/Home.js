import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Kevin from "../kevin.png";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.setState({
  //       posts: res.data.slice(0, 5),
  //     });
  //   });
  // }
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card " key={post.id}>
            <img src={Kevin} alt="kevin" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No post yet </div>
    );
    return (
      <div className="container home">
        <h1 className="center"> Home </h1>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
