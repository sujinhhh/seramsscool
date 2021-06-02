import React, { Component } from "react";
import { BrowserRouter, Route, Switch, MemoryRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import TodoRoot from "./components/todoApp/TodoRoot";
import SeramTest from "./components/exam/SeramTest";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";
import Footer from "./components/layout/Footer";
import ProjectList from "./components/projects/ProjectList";
import VideoRoot from "./components/video/VideoRoot";
import MyPage from "./components/mypage/MyPage";
import StudyRoot from "./components/study/StudyRoot";
import ReviewRoot from "./components/memberReview/ReviewRoot";
import CompanyRoot from "./components/company/CompanyRoot";
import gameMain from "./components/game/gameMain";

// import { Result } from "./components/exam/Result";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/create" component={CreateProject} />
            <Route path="/exam" component={SeramTest} />
            <Route path="/todo" component={TodoRoot} />
            <Route path="/video" component={VideoRoot} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/study" component={StudyRoot} />
            <Route path="/review" component={ReviewRoot} />
            <Route path="/company" component={CompanyRoot} />
            <Route path="/game" component={gameMain} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
