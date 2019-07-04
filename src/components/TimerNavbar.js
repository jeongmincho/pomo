import React from "react";
import settings from "../static/settings.png";
import toggleBall from "../static/toggleBall.png";
import reset from "../static/reset.png";
import close from "../static/close.png";

const TimerNavbar = props => {
  return (
    <div id="timerNavbar">
      {!props.isSettingsOn ? (
        <div
          id={
            props.appStatus === "work" ? "workTimerToggle" : "breakTimerToggle"
          }
          onClick={props.changeStatusHandler}
        >
          <img src={toggleBall} alt="Toggle Button" className="toggleBall" />
        </div>
      ) : (
        <div />
      )}
      <button className="button">
        {props.buttonStatus() === "BREAK" ||
        props.buttonStatus() === "FOCUS" ? (
          <img
            src={reset}
            alt="Reset Button"
            className="buttonImage"
            onClick={props.resetHandler}
          />
        ) : (
          <img
            src={!props.isSettingsOn ? settings : close}
            alt="Settings Button"
            className="buttonImage"
            onClick={props.changeToSettingsHandler}
          />
        )}
      </button>
    </div>
  );
};

export default TimerNavbar;
