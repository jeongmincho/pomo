import React from "react";
import TimerProgressBar from "./TimerProgressBar.js";
import TimerText from "./TimerText.js";
// import ReactCountdownClock from "react-countdown-clock";
import check from "../static/check.png";

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

        {this.props.buttonStatus() === "BREAK" ? (
          <img src={check} id="check" alt="completed sign" />
        ) : (
          <TimerText min={min} sec={sec} />
        )}

        <button
          id="timerButton"
          onClick={
            this.props.timerOn
              ? this.props.stopInterval
              : this.props.startInterval
          }
        >
          {this.props.buttonStatus()}
        </button>
      </div>
    );
  }
}

export default TimerClock;
