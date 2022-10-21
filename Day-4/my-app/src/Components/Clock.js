import React from "react";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { locale } = this.props;
    return (
      <div>
        <h2>Time: {this.state.date.toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}

export default Clock;
