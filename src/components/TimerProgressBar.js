import React from "react";

// Import module and default styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const needDominantBaselineFix = true;

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
          trailColor: "#FF8389",
          text: {
            fill: "#FFFFFF",
            fontSize: "16px"
          }
        })}
        text={
          sec < 10 ? (
            //probably will have to wrap the whole progress bar with a div
            //and render html tag on top of it with position absolute
            <tspan dy={needDominantBaselineFix ? -15 : 0} id="timerText">
              {min}:0{sec}
            </tspan>
          ) : (
            <tspan dy={needDominantBaselineFix ? -15 : 0} id="timerText">
              {min}:{sec}
            </tspan>
          )
        }
      />
    </div>
  );
};

// const TimerProgressBar = props => {
//   const min = props.min;
//   const sec = props.sec;
// const total = 25 * 60;
// const current = min * 60 + sec;
//   const rate = (current / total) * 100;
//   return (
//     <div id="timerProgressContainer">
//       <div id="timerProgressBar" style={{ width: `${rate}%` }} />
//       <canvas id="myCanvas" width="500" height="500" />
//     </div>
//   );
// };

export default TimerProgressBar;
