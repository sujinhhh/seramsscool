import React from "react";
import { useState } from "react";

function AddInfo({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !course || !day) {
      alert("please add information");
      return;
    }
    onAdd({ name, course, day, reminder });
    setName("");
    setCourse("");
    setDay("");
  };

  return (
    <div>
      <form className="register-add-form" onSubmit={onSubmit}>
        <div className="register-form-control">
          <label>Name : </label>
          <input
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register-form-control">
          <label>Register Class Name : </label>
          <input
            type="text"
            placeholder="Add Class"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="register-form-control">
          <label>Starting Date</label>
          <input
            type="text"
            placeholder="Starting Date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="register-form-control register-form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            className="filled-in"
            checked="checked"
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn black register-btn-block "
        />
      </form>
    </div>
  );
}

export default AddInfo;
