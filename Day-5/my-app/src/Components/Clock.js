import React, { Component } from "react";

export class Clock extends Component {
  state = { date : new Date() };

  tick = () => {
    this.setState((prevState) => ({
      date: new Date()
    }))
  }

  componentDidMount = () => {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.clockTimer);
  }

  render() {
    const { date } = this.state;
    return (
      <div className="clock">
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
