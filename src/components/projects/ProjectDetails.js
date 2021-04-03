import React from "react";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  //  const id = props.match
  return (
    <div className="projectDetail">
      <div>
        <div className="projectDetail-content">
          <span> Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            quibusdam, repudiandae commodi facere consectetur libero eius cumque
            rerum hic laudantium repellat. Nihil, modi perspiciatis. Suscipit
            sequi illum pariatur optio aliquam?
          </p>
        </div>
        <div>
          <div>posted by 영어이모</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
