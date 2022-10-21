import React, { Component } from "react";

export class Clock extends Component {
  state = { date: new Date() };

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }


  render() {
    const { locale } = this.props;
    return (
      <div className="clock">
        <h2>{this.state.date.toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}

export default Clock;
