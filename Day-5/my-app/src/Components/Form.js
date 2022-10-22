import React, { Component } from "react";

export class Form extends Component {
  state = { title: "", text: "", library: "" };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    }
  };
  render() {
    const { title, text, library } = this.state;
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
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <div className="checkbox-wrap">
            <input type="checkbox" id="remember"/>
            <label htmlFor="remember">Remember Me</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
