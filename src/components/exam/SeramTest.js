import React, { Component } from "react";
import quizList from "./quizList";
import QuestionBox from "./QuestionBox";
import { Result } from "./Result";
import "./Exam.css";
import { Button } from "@material-ui/core";

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
    // this.setState({
    //   responses: this.state.responses < 10 ? this.state.responses + 1 : 10,
    // });
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

  handleClick = () => {
    this.setState({
      responses: 10,
    });
  };

  render() {
    return (
      <div className="test-container">
        {this.state.responses === 10 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : (
          <div>
            <div className="test-title">
              <img src="./ram.jpg" alt="uncle" />
              <h3>4월 새람 영어 평가 시험에 오신 것을 환영합니다.</h3>
            </div>
            {this.state.questionList.length > 0 &&
              this.state.responses < 10 &&
              this.state.questionList.map(
                ({ question, answers, correct, questionId }) => {
                  return (
                    <QuestionBox
                      question={question}
                      options={answers}
                      key={questionId}
                      selected={(answer) => this.computeAnswer(answer, correct)}
                    />
                  );
                }
              )}

            <div className="test-title">
              <img src="./he2.jpg" alt="uncle" />
              <h3>수고하셨습니다</h3>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={this.handleClick}
                style={{ height: "50px" }}
              >
                점수 확인
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SeramTest;
