import React, { Component } from 'react'

export class Emoji extends Component {
  addEmoji = (text, emoji) => {
    return ` ${emoji} ${text} ${emoji}`;
  }
  render(override) {
    let text = 'I Love JavaScript';
    if (override) {
      text = override;
    }
    return (
      <div>{text}</div>
    )
  }
}

export default Emoji