import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import LoginForm from './components/step-1/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm/>
      </div>
    );
  }
}

export default App;
