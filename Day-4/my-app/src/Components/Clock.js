import React from "react";

class Clock extends React.Component {
  render() {
    const { locale } = this.props;
    return (
      <div>
        <h2>Time: {new Date().toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}

export default Clock;
