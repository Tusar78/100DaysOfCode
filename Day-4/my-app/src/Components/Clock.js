import React, { Component } from 'react'

export class Clock extends Component {
  state = { date: new Date(), locale: true };

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount = () => {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.clockTimer);
  }

  handleClick = () => {
    this.setState(prevState => ({
      locale: !prevState.locale
    }))
  }

  render() {
    const { date, locale } = this.state; 

    return (
      <div className='clock'>
        <button type='button' onClick={this.handleClick}>{locale ? 'Bn' : 'En'}</button>
        <h2>{locale ? date.toLocaleTimeString('en-US') : date.toLocaleTimeString('bn-BD')}</h2>
      </div>
    )
  }
}

export default Clock