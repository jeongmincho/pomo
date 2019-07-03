import React from "react";

// Import module and default styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerProgressBar = props => {
  const min = props.min;
  const sec = props.sec;
  const total = 25 * 60;
  const current = min * 60 + sec;
  const percentage = (current / total) * 100;
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
          trailColor: "#FF8389"
        })}
      />
    </div>
  );
};

export default TimerProgressBar;
