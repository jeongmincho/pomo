import React from "react";
import ReactCountdownClock from "react-countdown-clock";

class TimerClock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 1000
    };
  }
  render() {
    return <div id="timerClockContainer" />;
  }
}

export default TimerClock;
