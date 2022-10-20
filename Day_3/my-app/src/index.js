import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  render() {
    const { locale } = this.props;
    return (
      <div>
        <h1>Hello React!</h1>
        <span>Time: {new Date().toLocaleTimeString(locale)}</span>
      </div>
    );
  }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));
