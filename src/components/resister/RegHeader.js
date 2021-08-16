import React from "react";
import ProtoTypes from "prop-types";
import Button from "./Button";

const RegHeader = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div className="register-header">
      <h4
        className="blue-text text-darken-2 center"
        style={{ margin: "0 auto" }}
      >
        {title}
      </h4>
      {/* <Button color="green" text="Add" onClick={onClick} /> */}
    </div>
  );
};

// ㅇㅏ무것도 전달이 안됐을때 기본값
// RegHeader.defaultProps = {
//   title: "defualt Props",
// };

// 에러 안나게 타입을 정해주기
// RegHeader.propTypes = {
//   title: ProtoTypes.string.isRequired,
// };

export default RegHeader;
