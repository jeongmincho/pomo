import React from "react";
import "./stylesheets/App.css";
import TimerContainer from "./components/TimerContainer.js";

function App() {
  return (
    <div className="App">
      <div id="appBackground" />
      <div id="appContent">
        <TimerContainer />
      </div>
    </div>
  );
}

export default App;
