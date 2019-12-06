import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return <h1>If I'm seeing this, it's working.</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
