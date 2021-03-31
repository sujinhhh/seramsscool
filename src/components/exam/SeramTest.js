import React, { Component } from "react";
import Exam2 from "./Exam2";
import quizList from "./quizList";
import QuestionBox from "./QuestionBox";
import { Result } from "./Result";
import { Typography, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { red, pink } from "@material-ui/core/colors";

class SeramTest extends Component {
  state = {
    questionList: [],
  };

  getQuestions = () => {
    quizList().then((question) => {
      this.setState({
        questionList: question,
        score: 0,
        responses: 0,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 10,
      });
    }
    this.setState({
      responses: this.state.responses < 10 ? this.state.responses + 1 : 10,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#651fff",
        },
        secondary: pink,
      },
      // typography: {
      //   fontFamily: "Single Day",
      // },
    });
    return (
      <ThemeProvider theme={theme}>
        <div className="test-container">
          <Typography variant="h3" align="center" color="primary">
            새람 시험지
          </Typography>
          {this.state.questionList.length > 0 &&
            this.state.responses < 10 &&
            this.state.questionList.map(
              ({ question, answers, correct, questionId }) => {
                return (
                  <h4>
                    <QuestionBox
                      question={question}
                      options={answers}
                      key={questionId}
                      selected={(answer) => this.computeAnswer(answer, correct)}
                    />
                  </h4>
                );
              }
            )}
          {this.state.responses === 10 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      </ThemeProvider>
    );
  }
}

export default SeramTest;
