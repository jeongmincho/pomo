import React from "react";

// Import module and default styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerProgressBar = props => {
  const { min, sec } = props;
  const total = 25 * 60;
  const current = min * 60 + sec;
  const percentage = (current / total) * 100;
  let trailColor = "#FF8389";
  props.appStatus === "break" && (trailColor = "#5CB5FF");
  return (
    <div style={{ width: "430px" }}>
      <CircularProgressbar
        value={percentage}
        circleRatio={0.85}
        strokeWidth={1.5}
        styles={buildStyles({
          rotation: 0.575,
          strokeLinecap: "round",
          textSize: "25px",
          pathTransitionDuration: 0.5,
          pathColor: "#FFFFFF",
          textColor: "#FFFFFF",
          trailColor: trailColor
        })}
      />
    </div>
  );
};

export default TimerProgressBar;
