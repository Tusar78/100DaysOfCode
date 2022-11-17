import React, { Component } from "react";

export class HoverCounter extends Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hover me {count}</h2>
      </div>
    );
  }
}

export default HoverCounter;
