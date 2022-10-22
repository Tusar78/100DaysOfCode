import React, { Component } from 'react'

export class Form extends Component {
  state = { filled : '' }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      filled: e.target.value
    })
  }
  render() {
    const {filled} = this.state;
    return (
      <div>
        <form>
          <input type="text" placeholder='Enter anything' value={filled} onChange={this.handleChange} />
          <p>{filled}</p>
        </form>
      </div>
    )
  }
}

export default Form