import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = React.useState(options);
  return (
    <Card style={{ backgroundColor: "#ede7f6", margin: "0, 30" }}>
      <CardContent xs={12} justify="center">
        <Typography variant="h4" gutterBottom>
          {question}
        </Typography>
        {answer.map((text, index) => {
          return (
            <ButtonGroup align="center">
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                key={index}
                className="answerBtn"
                onClick={() => {
                  setAnswer([text]);
                  selected(text);
                }}
              >
                {text}
              </Button>
            </ButtonGroup>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default QuestionBox;
