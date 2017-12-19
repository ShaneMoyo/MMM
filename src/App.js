import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './landing/Landing';
import Header from './header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
      </div>
    );
  }
}

export default App;
