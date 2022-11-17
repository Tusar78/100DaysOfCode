import React, { Component } from "react";

export class ClickCounter extends Component {
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button" onClick={this.incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default ClickCounter;
