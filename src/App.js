import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import bibleScripture from "./components/bibleScripture";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/bible" component={bibleScripture} />
            <Route path="/:post_id" component={Portfolio} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
