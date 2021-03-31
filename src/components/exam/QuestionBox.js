import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./Exam.css";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = React.useState(options);
  return (
    <main className="box-container">
      <div className="question-container">
        <h3>{question}</h3>
        {answer.map((text, index) => {
          return (
            <ButtonGroup>
              <Button
                size="xlarge"
                variant="outlined"
                color="secondary"
                key={index}
                className="answerBtn"
                onClick={() => {
                  setAnswer([text]);
                  selected(text);
                }}
                style={{
                  textTransform: "lowercase",
                  fontSize: "2rem",
                  margin: "0 5px",
                }}
              >
                {text}
              </Button>
            </ButtonGroup>
          );
        })}
      </div>
    </main>
  );
};

export default QuestionBox;
