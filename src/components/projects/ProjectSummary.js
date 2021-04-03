import React from "react";
import "./project.css";

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <span> {project.title}</span>
        <p> Posted by 영어이모</p>
        <p> March 12</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
