import React from "react";
import TimerProgressBar from "./TimerProgressBar.js";
// import ReactCountdownClock from "react-countdown-clock";

class TimerClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 25,
      sec: 0,
      timerOn: false
    };
  }

  stopInterval() {
    clearInterval(this.timerID);
    this.setState({
      timerOn: false
    });
  }

  startInterval() {
    this.timerID = setInterval(() => {
      if (this.state.sec === 0) {
        this.setState({ min: this.state.min - 1, sec: 59 });
      } else {
        this.setState({ sec: this.state.sec - 1 });
      }
    }, 250);
    this.setState({
      timerOn: true
    });
  }

  render() {
    return (
      <div id="timerClock">
        <TimerProgressBar min={this.state.min} sec={this.state.sec} />
        {this.state.timerOn ? (
          <button
            id="timerButton"
            onClick={() => {
              this.stopInterval();
            }}
          >
            PAUSE
          </button>
        ) : (
          <button
            id="timerButton"
            onClick={() => {
              this.startInterval();
            }}
          >
            START
          </button>
        )}
      </div>
    );
  }
}

export default TimerClock;
