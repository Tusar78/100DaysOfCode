import React, { Component } from "react";

export class Click extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} Times</button>
      </div>
    );
  }
}

export default Click;
