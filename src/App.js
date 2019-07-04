import React from "react";
import "./stylesheets/App.css";
import TimerContainer from "./components/TimerContainer.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div id="appBackground" />
        <div id="appContent">
          <TimerContainer />
        </div>
      </div>
    );
  }
}
