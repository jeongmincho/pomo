import React from "react";
import TimerProgressBar from "./TimerProgressBar.js";
import TimerText from "./TimerText.js";
import check from "../static/check.png";

const TimerClock = props => {
  const min = Math.floor(props.time / 60);
  const sec = props.time % 60;
  return (
    <div id="timerClock">
      <TimerProgressBar
        time={props.time}
        appStatus={props.appStatus}
        maxWorkTime={props.maxWorkTime}
        maxBreakTime={props.maxBreakTime}
      />

      {props.buttonStatus() === "BREAK" || props.buttonStatus() === "FOCUS" ? (
        <img src={check} id="check" alt="completed sign" />
      ) : (
        <div id="timerTextContainer">
          <TimerText min={min} sec={sec} />
        </div>
      )}
      <button
        id={props.appStatus === "work" ? "workTimerButton" : "breakTimerButton"}
        onClick={
          props.timerOn
            ? props.stopInterval
            : props.time !== 0
            ? props.startInterval
            : props.changeStatusHandler
        }
        tabIndex="0"
      >
        {props.buttonStatus()}
      </button>
    </div>
  );
};

export default TimerClock;
