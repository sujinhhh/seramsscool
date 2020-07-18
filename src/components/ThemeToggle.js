import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}> Thoggle the Theme</button>;
  }
}

export default ThemeToggle;
