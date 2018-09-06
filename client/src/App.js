import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';

import logo from './logo.svg';
import './App.css';
import MyStringStore from './contracts/MyStringStore.json';

const options = {
  contracts: [MyStringStore]
};

// setup the drizzle store and drizzle
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
