import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Logo = ({
  spinning,
  description = 'Logo',
  ...otherProps
}) => (
  <img src={logo}
       className={`App-logo ${ spinning ? 'App-logo-spinning' : ''}`}
       alt={description}
       aria-label={description}
       {...otherProps}/>
)

const AppHeader = () => (
  <header className="App-header">
    <Logo description="The logo (not spinning)"/>
    <Logo spinning description="The logo (spinning)"/>
    <h1 className="App-title">Welcome to React!!!!</h1>
  </header>
)

const AppRenderMethod = ({ greeting, footerMessage }) => (
  <div className="App">
    <AppHeader/>
    <p className="App-intro">
      {greeting}, edit <code>src/App.js</code> and save to reload.
    </p>
    <p aria-label={ `label: ${footerMessage}` }>
      { footerMessage }
    </p>
  </div>
)

class App extends Component {
  state = { greeting: 'To get started' }

  render() {
    const { greeting } = this.state
    const { footerMessage } = this.props
    return <AppRenderMethod { ...{greeting, footerMessage} }/>
  }
}

export default App
