import React, { Component } from "react";

const withCounter = OriginalComponent => {
  class NewComponent extends Component {
    state = { click: 0 };

    handleClick = () => {
      this.setState((prevState) => ({
        click: prevState.click + 1
      }))
    }

    render() {
      const { click } = this.state;
      return (
        <OriginalComponent click={click} handleClick={this.handleClick} />
      )
    }
  }

  return NewComponent;
}

export default withCounter;