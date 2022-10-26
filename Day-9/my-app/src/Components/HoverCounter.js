import React, { Component } from 'react'

export class HoverCounter extends Component {
  state = {
    hover: 0
  }

  handleHover = () => {
    this.setState((prevState) => ({
      hover: prevState.hover + 1
    }))
  }
  render() {
    const { hover } = this.state;
    return (
      <button onMouseEnter={this.handleHover}>Hover {hover}</button>
    )
  }
}

export default HoverCounter