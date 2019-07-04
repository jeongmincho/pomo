import React from "react";

const TimerText = props => {
  const min = props.min;
  const sec = props.sec;
  return sec < 10 ? (
    <div id="timerText">
      {min}:0{sec}
      {/* <div id="minText">{min}</div>
      <div id="colonText">:</div>
      <div id="secText">0{sec}</div> */}
    </div>
  ) : (
    <div id="timerText">
      {min}:{sec}
    </div>
  );
};

export default TimerText;
