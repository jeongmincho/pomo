import React from "react";
import TimerProgressBar from "./TimerProgressBar.js";
// import ReactCountdownClock from "react-countdown-clock";

class TimerClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const min = Math.floor(this.props.time / 60);
    const sec = this.props.time % 60;
    return (
      <div id="timerClock">
        <TimerProgressBar min={min} sec={sec} />
        {this.props.timerOn ? (
          <button id="timerButton" onClick={this.props.stopInterval}>
            PAUSE
          </button>
        ) : (
          <button id="timerButton" onClick={this.props.startInterval}>
            {!this.props.firstTime ? "START" : "RESUME"}
          </button>
        )}
      </div>
    );
  }
}

export default TimerClock;
