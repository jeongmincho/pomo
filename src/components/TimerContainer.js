import React from "react";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";

class TimerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 60,
      timerOn: false,
      numberCompleted: 3
    };
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
  }

  buttonStatus() {
    let result = "";
    if (this.timerOn) result = "PAUSE";
    else {
      switch (this.time) {
        case 60:
          result = "START";
          break;
        case 0:
          result = "BREAK";
          break;
        default:
          result = "RESUME";
      }
    }
    return result;
  }

  stopInterval() {
    clearInterval(this.timerID);
    this.setState({
      timerOn: false
    });
  }

  doneInterval() {
    clearInterval(this.timerID);
    this.setState({
      time: 60,
      timerOn: false
    });
  }

  startInterval() {
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time === 0) this.doneInterval();
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
          buttonStatus={this.buttonStatus}
        />
      </div>
    );
  }
}

export default TimerContainer;
