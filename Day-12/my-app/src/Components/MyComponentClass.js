import React, { Component } from "react";

export class MyComponentClass extends Component {
  state = {
    count: 0,
    time: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  addClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    const { time, count } = this.state;
    return (
      <div>
        <p>Time {time.toLocaleTimeString()}</p>

        <p>
          <button type="button" onClick={this.addClick}>
            Click {count}
          </button>
        </p>
      </div>
    );
  }
}

export default MyComponentClass;
