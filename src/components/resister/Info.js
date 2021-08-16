import React from "react";
import {
  FaTimes,
  FaLaugh,
  FaEdit,
  FaCalendarCheck,
  FaGreaterThan,
} from "react-icons/fa";

function Info({ info, onDelete, onToggle }) {
  return (
    <div
      className={`register-task ${info.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(info.id)}
    >
      <h6 className="register-center">
        <FaLaugh className="fa-icon" />
        Name : {info.name}
      </h6>
      <h6>
        <FaEdit className="fa-icon" />
        Class : {info.course}
      </h6>

      <h6>
        <FaGreaterThan className="fa-icon" />
        Starting Day : {info.day}
      </h6>

      <h6
        onClick={onDelete}
        className="register-center waves-effect waves-effect light white"
      >
        <FaTimes
          style={{
            fontSize: "2rem",
            color: "red",
            cursor: "pointer",
            alignSelf: "center",
          }}
        />
        <span>Cancel Class</span>
      </h6>
    </div>
  );
}

export default Info;
