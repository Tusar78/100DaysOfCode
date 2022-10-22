import React, { Component } from "react";

export class Clock extends Component {
  state = { date: new Date(), locale: false };

  tick = () => {
    this.setState((prevState) => ({
      date: new Date(),
    }));
  };

  componentDidMount = () => {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.clockTimer);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      locale: !prevState.locale
    }))
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div className="clock">
        <h2>{locale ? date.toLocaleTimeString('bn-BD') : date.toLocaleTimeString('en-US')}</h2>
        <button onClick={this.handleClick} type="button">{locale ? 'En' : 'Bn'}</button>
      </div>
    );
  }
}

export default Clock;
