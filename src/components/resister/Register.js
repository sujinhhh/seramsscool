import React, { useState } from "react";
import RegHeader from "./RegHeader";
import "./styles.css";
import InfoList from "./InfoList";
import AddInfo from "./AddInfo";
import { FaRegLaughSquint } from "react-icons/fa";

const Register = () => {
  const title = "Register Class";
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "Sujin Lee",
      course: "English",
      day: "",
      reminder: true,
    },
    {
      id: 2,
      name: "Kevin Woo",
      course: "Math",
      day: "",
      reminder: true,
    },
  ]);

  const handleDelete = (id) => {
    setInfo(info.filter((item) => item.id !== id));
  };

  const reminder = (id) => {
    setInfo(
      info.map((item) =>
        item.id === id ? { ...item, reminder: !item.reminder } : item
      )
    );
  };

  const addInfo = (task) => {
    setInfo([...info, task]);
  };

  return (
    <div className="register">
      <div className="register-container">
        <RegHeader title={title} />
        <AddInfo onAdd={addInfo} />
        {info.length > 0 ? (
          <InfoList info={info} onDelete={handleDelete} onToggle={reminder} />
        ) : (
          <h5 className="lime accent-2">
            No more Class <FaRegLaughSquint /> "Please Add Classes!!""
          </h5>
        )}
      </div>
    </div>
  );
};

export default Register;
