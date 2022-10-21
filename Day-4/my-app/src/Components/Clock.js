import React, { Component } from "react";

export class Clock extends Component {
  state = { date: new Date(), locale: 'bn-BD' };

  tick = () => {
    this.setState({ date: new Date() });
  }

  componentDidMount = () => {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.clockTimer);
  }

  handleClick(locale) {
    this.setState({
      locale,
    })
  }

  render() {
    const { date, locale } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>English</button>
        <div className="clock">
          <h2>{date.toLocaleTimeString(locale)}</h2>
        </div>
      </>
    );
  }
}

export default Clock;
