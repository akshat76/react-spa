import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './components/TextBox'
class App extends Component {
  render() {
    return (
      <div className="App">
       <TextBox/>
      </div>
    );
  }
}

export default App;
