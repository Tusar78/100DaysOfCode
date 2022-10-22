import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { change, locale, show } = this.props;
    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {locale === "en-US" ? "English" : "Bangla"}
        </button>
        {show && <p>Hello React</p>}
        
      </>
    );
  }
}

export default Button;