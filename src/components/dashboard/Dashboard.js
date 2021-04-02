import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import "./dashboard.css";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="dashboard-grid">
            <Notification />
          </div>
          <div>
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.firestore);
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(Dashboard);
