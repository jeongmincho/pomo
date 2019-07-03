import React from "react";
import settings from "../static/settings.png";
import toggleBall from "../static/toggleBall.png";
import reset from "../static/reset.png";

const TimerNavbar = props => {
  return (
    <div id="timerNavbar">
      <div id="timerToggle">
        <img src={toggleBall} alt="Settings Button" className="toggleBall" />
      </div>

      <button className="button">
        {props.buttonStatus() === "BREAK" ? (
          <img
            src={reset}
            alt="Reset Button"
            className="buttonImage"
            onClick={props.resetHandler}
          />
        ) : (
          <img src={settings} alt="Settings Button" className="buttonImage" />
        )}
      </button>
    </div>
  );
};

export default TimerNavbar;
