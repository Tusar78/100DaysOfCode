import React from "react";
import Emoji from "./Emoji";

export class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const decorated = this.addEmoji("I Love ReactJS", "👌");

    return <div>{super.render(decorated)}</div>;
  }
}

export default Text;
