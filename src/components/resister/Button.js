import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} className="waves-effect waves-light btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
