import React, { Component } from 'react'

export class Button extends Component {
  render() {
    const {change, locale} = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        {
          locale === 'en-US' ? 'English' : 'Bangla'
        }
      </button>
    )
  }
}

export default Button