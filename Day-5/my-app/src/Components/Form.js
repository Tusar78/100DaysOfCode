import React, { Component } from "react";

export class Form extends Component {
  state = { title: "", text: "", library: "", checking: true };

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
    } else if (e.target.type === "checkbox") {
      this.setState({
        checking: e.target.checked,
      });
    }
  };

  onSubmitHandle = (e) => {
    const { title, text, library, checking } = this.state;
    e.preventDefault();
    console.log(title, text, library, checking);
  }

  render() {
    const { title, text, library, checking } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
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
            <input
              type="checkbox"
              id="remember"
              checked={checking}
              onChange={this.handleChange}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
