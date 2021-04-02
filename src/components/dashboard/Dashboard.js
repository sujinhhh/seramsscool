import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import "./dashboard.css";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createProject } from "../../store/actions/projectActions";

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

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default compose(null, mapDispatchToProps)(Dashboard);
