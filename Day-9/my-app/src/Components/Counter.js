import React, { Component } from 'react'

export class Counter extends Component {
  state = { click: 0};

  handleClick = () => {
    this.setState((prevState) => ({
      click: prevState.click + 1
    }))
  }
  render() {
    const { render, children } = this.props;
    const {click } = this.state;
    return (
      <>
        {
          render ? render(click, this.handleClick) : children(click, this.handleClick)
        }
      </>      
    )
  }
}

export default Counter