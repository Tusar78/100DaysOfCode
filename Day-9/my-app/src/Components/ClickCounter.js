import React, { Component } from "react";

export class ClickCounter extends Component {
  state = { click: 0 };

  handleClick = () => {
    this.setState((prevState) => ({
      click: prevState.click + 1
    }))
  }

  render() {
    const { click } = this.state;
    return <button onClick={this.handleClick}>Click {click} times</button>;
  }
}

export default ClickCounter;
