import React from "react";
import settings from "../static/settings.png";
import toggleBall from "../static/toggleBall.png";

const TimerNavbar = () => {
  return (
    <div id="timerNavbar">
      <div id="timerToggle">
        <img src={toggleBall} alt="Settings Button" className="toggleBall" />
      </div>

      <button className="button">
        <img src={settings} alt="Settings Button" className="buttonImage" />
      </button>
    </div>
  );
};

export default TimerNavbar;
