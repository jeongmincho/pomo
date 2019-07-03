import React from "react";
import TimerProgressBar from "./TimerProgressBar.js";
import TimerText from "./TimerText.js";
import check from "../static/check.png";

const TimerClock = props => {
  const min = Math.floor(props.time / 60);
  const sec = props.time % 60;
  return (
    <div id="timerClock">
      <TimerProgressBar min={min} sec={sec} />

      {props.buttonStatus() === "BREAK" ? (
        <img src={check} id="check" alt="completed sign" />
      ) : (
        <TimerText min={min} sec={sec} />
      )}

      <button
        id="timerButton"
        onClick={props.timerOn ? props.stopInterval : props.startInterval}
      >
        {props.buttonStatus()}
      </button>
    </div>
  );
};

export default TimerClock;
