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
          <a
            href="https://pomotimer.typeform.com/to/YVhrbV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="feedbackButton">FEEDBACK</button>
          </a>
          <TimerContainer />
          <footer id="footer">
            Copyright &#169; Jeongmin Cho, All rights reserved.
          </footer>
        </div>
      </div>
    );
  }
}
