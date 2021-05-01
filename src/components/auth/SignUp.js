import React, { useRef } from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const classes = useStyles();

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.root}>
      <form className="signin-form">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/08/19/08/castle-1083570_1280.png"
          alt=""
        />
        <h5>Sign In</h5>
        <div className="signin-input">
          <label htmlFor="name">이름</label>
          <input type="name" id="name" ref={nameRef} />
        </div>
        <div className="signin-input">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className="signin-input">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className="signin-input">
          <button className="btn">등록하기</button>
        </div>
      </form>
    </Card>
  );
}
