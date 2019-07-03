import React from "react";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";

class BreakTimerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 15,
      timerOn: false,
      numberCompleted: 3
    };
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.buttonStatus = this.buttonStatus.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  resetHandler() {
    this.setState({
      time: 30,
      timerOn: false
    });
  }

  buttonStatus() {
    let result = "";
    if (this.state.timerOn) result = "PAUSE";
    else {
      switch (this.state.time) {
        case 30:
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
      if (this.state.time === 0) this.stopInterval();
    }, 250);
    this.setState({
      timerOn: true
    });
  }

  render() {
    return (
      <div id="breakTimeContainer">
        {!this.state.timerOn ? (
          <TimerNavbar
            buttonStatus={this.buttonStatus}
            resetHandler={this.resetHandler}
          />
        ) : (
          <div id="filler" />
        )}
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

export default BreakTimerContainer;
