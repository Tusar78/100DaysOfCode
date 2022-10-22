import React, { Component } from "react";

export class Form extends Component {
  state = { title: "", text: "" };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === 'textarea') {
      this.setState({
        text: e.target.value,
      });
    }
  };
  render() {
    const { title, text } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter anything"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            name="textarea"
            placeholder="Enter anything"
            value={text}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default Form;
