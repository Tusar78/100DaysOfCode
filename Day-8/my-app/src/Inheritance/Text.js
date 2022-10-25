import React from "react";

const Text = ({ addEmoji }) => {
  const text = `I'm JavaScript popular library`;

  return <div>{addEmoji ? addEmoji(text, "💪") : text}</div>;
};

export default Text;
