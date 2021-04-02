import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import TodoRoot from "./components/todoApp/TodoRoot";
import SeramTest from "./components/exam/SeramTest";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Footer from "./components/layout/Footer";
import ProjectList from "./components/projects/ProjectList";

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
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/create" component={CreateProject} />
            <Route path="/exam" component={SeramTest} />
            <Route path="/todo" component={TodoRoot} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
