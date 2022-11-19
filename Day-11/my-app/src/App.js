import React, { Component } from 'react'
import Section from './Components/Section'
import ThemeContext from './Context/ThemeContext'
import './App.css'

export class App extends Component {
  state = {
    theme: 'dark'
  }
  render() {
    const {theme} = this.state;
    return (
      <>
        <ThemeContext.Provider value={{theme}}>
          <Section />
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App