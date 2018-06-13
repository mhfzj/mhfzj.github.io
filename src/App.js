import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{'width':'595px'}} id="header">
          <header>Hello</header>
        </div>
        <div id="pdf" className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="footer">
          <footer>
            <h1>End</h1>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
