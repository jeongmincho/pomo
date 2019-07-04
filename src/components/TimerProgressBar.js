import React from "react";

// Import module and default styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerProgressBar = props => {
  let total = "";
  let trailColor = "#FF8389";
  props.appStatus === "work"
    ? (total = props.maxWorkTime)
    : (total = props.maxBreakTime);
  props.appStatus === "break" && (trailColor = "#5CB5FF");
  const percentage = (props.time / total) * 100;
  return (
    <div style={{ width: "430px" }}>
      <CircularProgressbar
        value={percentage}
        circleRatio={0.85}
        strokeWidth={1.5}
        styles={buildStyles({
          rotation: 0.575,
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          pathColor: "#FFFFFF",
          trailColor: trailColor
        })}
      />
    </div>
  );
};

export default TimerProgressBar;
