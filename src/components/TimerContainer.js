import React from "react";
import logo from "../static/logo.svg";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";

class TimerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 120,
      timerOn: false,
      firstTime: false,
      numberCompleted: 3
    };
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
  }

  stopInterval() {
    clearInterval(this.timerID);
    this.setState({
      timerOn: false
    });
  }

  startInterval() {
    this.setState({ firstTime: true });
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 250);
    this.setState({
      timerOn: true
    });
  }

  render() {
    return (
      <div id="timerContainer">
        {!this.state.timerOn ? <TimerNavbar /> : <div id="filler" />}
        <TimerClock
          time={this.state.time}
          timerOn={this.state.timerOn}
          stopInterval={this.stopInterval}
          startInterval={this.startInterval}
          firstTime={this.state.firstTime}
        />
      </div>
    );
  }
}

export default TimerContainer;
