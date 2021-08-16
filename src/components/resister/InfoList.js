import React, { useState } from "react";
import Button from "./Button";
import Info from "./Info";
import { FaTimes } from "react-icons/fa";

function InfoList({ info, onDelete, onToggle }) {
  return (
    <div>
      <h4 className="center">Registered List</h4>
      {info.map((data, index) => (
        <Info
          key={index}
          className="register-task"
          info={data}
          onDelete={() => onDelete(data.id)}
          onToggle={onToggle}
        ></Info>
      ))}
    </div>
  );
}

export default InfoList;
