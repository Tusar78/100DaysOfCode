## What is State?
The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

## What is Lifecycle Method in react?
Each component in React has a lifecycle that you can monitor and manipulate during its three main phases. The three phases are Mounting, Updating, and Unmounting.


![enter image description here](https://i.ibb.co/SrM1sSd/clock.png)

### Clock Component

```javascript
import React, { Component } from "react";

export class Clock extends Component {
  state = { date: new Date() };

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }


  render() {
    const { locale } = this.props;
    return (
      <div className="clock">
        <h2>{this.state.date.toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}

export default Clock;
```

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'DM Serif Display', serif;
  height: 100vh;
  display: grid;
  place-items: center;
}

.clock {
  width: 300px;
  aspect-ratio: 21/9;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 7px 7px 0 #d7cccc;
  display: grid;
  place-items: center;
  border: 1px solid #d7cccc;
}

.clock h2 {
  font-size: 2.25rem;
  color: #7a97ff;
}
```