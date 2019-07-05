import React from "react";
import TimerNavbar from "./TimerNavbar.js";
import TimerClock from "./TimerClock.js";
import TimerSettings from "./TimerSettings.js";

class WorkTimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      maxWorkTime: 1500,
      maxBreakTime: 300,
      timerOn: false,
      appStatus: "work",
      isSettingsOn: false,
      numberCompleted: 3
    };
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.buttonStatus = this.buttonStatus.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeMaxTimeHandler = this.changeMaxTimeHandler.bind(this);
    this.changeToSettingsHandler = this.changeToSettingsHandler.bind(this);
  }

  changeMaxTimeHandler(value) {
    if (this.state.appStatus === "work") {
      this.setState({
        maxWorkTime: value,
        time: value
      });
    }
    if (this.state.appStatus === "break") {
      this.setState({
        maxBreakTime: value,
        time: value
      });
    }
  }

  resetHandler() {
    if (this.state.appStatus === "work") {
      this.setState({
        time: this.state.maxWorkTime,
        timerOn: false
      });
    }
    if (this.state.appStatus === "break") {
      this.setState({
        time: this.state.maxBreakTime,
        timerOn: false
      });
    }
  }

  buttonStatus() {
    let result = "";
    if (this.state.timerOn) result = "PAUSE";
    else {
      switch (this.state.time + this.state.appStatus) {
        case `${this.state.maxWorkTime}work`:
          result = "START";
          break;
        case `${this.state.maxBreakTime}break`:
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
        time: this.state.maxBreakTime,
        appStatus: "break"
      });
    }
    if (this.state.appStatus === "break") {
      this.setState({
        time: this.state.maxWorkTime,
        appStatus: "work"
      });
    }
  }

  changeToSettingsHandler() {
    this.setState({
      isSettingsOn: !this.state.isSettingsOn
    });
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
    }, 1000);
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
            isSettingsOn={this.state.isSettingsOn}
            changeStatusHandler={this.changeStatusHandler}
            changeToSettingsHandler={this.changeToSettingsHandler}
          />
        ) : (
          <div id="filler" />
        )}
        {!this.state.isSettingsOn ? (
          <TimerClock
            time={this.state.time}
            timerOn={this.state.timerOn}
            stopInterval={this.stopInterval}
            startInterval={this.startInterval}
            buttonStatus={this.buttonStatus}
            maxWorkTime={this.state.maxWorkTime}
            maxBreakTime={this.state.maxBreakTime}
            appStatus={this.state.appStatus}
            changeStatusHandler={this.changeStatusHandler}
          />
        ) : (
          <TimerSettings
            time={this.state.time}
            changeMaxTimeHandler={this.changeMaxTimeHandler}
          />
        )}
      </div>
    );
  }
}

export default WorkTimerContainer;
