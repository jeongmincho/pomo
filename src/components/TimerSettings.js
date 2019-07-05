import React from "react";
import Slider from "rc-slider";
import TimerText from "./TimerText.js";
import "rc-slider/assets/index.css";
import "../../src/stylesheets/App.css";

const TimerSettings = props => {
  const min = Math.floor(props.time / 60);
  const sec = props.time % 60;
  return (
    <div id="timerSettingsContainer">
      <div id="timerTextContainer">
        <TimerText min={min} sec={sec} />
      </div>
      <div id="timerSliderContainer">
        <Slider
          min={300}
          max={3600}
          defaultValue={1500}
          dots={true}
          railStyle={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          onChange={value => {
            props.changeMaxTimeHandler(value);
          }}
          step={300}
        />
      </div>
    </div>
  );
};

export default TimerSettings;
