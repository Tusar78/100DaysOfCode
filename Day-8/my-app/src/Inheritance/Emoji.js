import React, { Component } from 'react'

export class Emoji extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render() {
    const { children } = this.props;
    return (
      <div>{children({addEmoji: this.addEmoji})}</div>
    )
  }
}

export default Emoji