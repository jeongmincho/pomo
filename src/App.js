import React from "react";
import "./stylesheets/App.css";
import WorkTimerContainer from "./components/WorkTimerContainer.js";
import BreakTimerContainer from "./components/BreakTimerContainer.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isStatusWork: true
    };
    this.changeAppStatusHandler = this.changeAppStatusHandler.bind(this);
  }

  changeAppStatusHandler() {
    this.setState({
      isStatusWork: !this.state.isStatusWork
    });
  }

  render() {
    return (
      <div className="App">
        <div id="appBackground" />
        <div id="appContent">
          {this.state.isStatusWork ? (
            <WorkTimerContainer
              isStatusWork={this.state.isStatusWork}
              changeAppStatusHandler={this.changeAppStatusHandler}
            />
          ) : (
            <BreakTimerContainer
              isStatusWork={this.state.isStatusWork}
              changeAppStatusHandler={this.changeAppStatusHandler}
            />
          )}
        </div>
      </div>
    );
  }
}
