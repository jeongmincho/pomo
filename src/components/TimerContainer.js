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
      </div>
    );
  }
}

export default TimerContainer;
