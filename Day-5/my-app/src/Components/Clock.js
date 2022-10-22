import React, { Component } from "react";
import Button from "./Button";

export class Clock extends Component {
  state = { date : new Date(), locale: 'en-US' };

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

  handleClick = (locale) => {
    this.setState({
      locale,
    })
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div className="clock">
        <h2>{date.toLocaleTimeString(locale)}</h2>
        {
          locale === 'en-US' ? <Button change={this.handleClick} locale='bn-BD' /> : <Button change={this.handleClick} locale="en-US" />
        }
        
      </div>
    );
  }
}

export default Clock;
