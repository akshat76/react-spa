import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header';
import Login from './containers/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
