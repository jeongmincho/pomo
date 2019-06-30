import React from "react";
import logo from "../static/logo.svg";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";

class TimerContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="timerContainer">
        <TimerNavbar />
        <TimerClock />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default TimerContainer;
