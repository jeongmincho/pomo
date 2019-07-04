import React from "react";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";

class WorkTimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
      timerOn: false,
      appStatus: "work",
      numberCompleted: 3
    };
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.buttonStatus = this.buttonStatus.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
  }

  resetHandler() {
    if (this.state.appStatus === "work") {
      this.setState({
        time: 60,
        timerOn: false
      });
    }
    if (this.state.appStatus === "break") {
      this.setState({
        time: 30,
        timerOn: false
      });
    }
  }

  buttonStatus() {
    let result = "";
    if (this.state.timerOn) result = "PAUSE";
    else {
      switch (this.state.time + this.state.appStatus) {
        case "60work":
          result = "START";
          break;
        case "30break":
          result = "START";
          break;
        case "0work":
          result = "BREAK";
          break;
        case "0break":
          result = "FOCUS";
          break;
        default:
          result = "RESUME";
      }
    }
    return result;
  }

  changeStatusHandler() {
    if (this.state.appStatus === "work") {
      this.setState({
        time: 30,
        appStatus: "break"
      });
    }
    if (this.state.appStatus === "break") {
      this.setState({
        time: 60,
        appStatus: "work"
      });
    }
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
      timerOn: false
    });
  }

  startInterval() {
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time === 0) this.stopInterval();
    }, 50);
    this.setState({
      timerOn: true
    });
  }

  render() {
    return (
      <div id={`${this.state.appStatus}TimerContainer`}>
        {!this.state.timerOn ? (
          <TimerNavbar
            buttonStatus={this.buttonStatus}
            resetHandler={this.resetHandler}
            appStatus={this.state.appStatus}
            changeStatusHandler={this.changeStatusHandler}
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
          appStatus={this.state.appStatus}
          changeStatusHandler={this.changeStatusHandler}
        />
      </div>
    );
  }
}

export default WorkTimerContainer;
