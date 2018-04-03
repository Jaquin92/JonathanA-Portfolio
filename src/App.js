import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Jonathan Aquino</h1>

        <b>Software Engineer</b>
        <br />
        <div className="links" >
          <a href="http://sayless.fun">sayless</a>
          <a href="http://github.com/jaquin92">Github</a>
          <a href="http://linkedin.com/in/jonathan-aquino ">LinkedIn</a>
          <a href="mailto:jaquin92@yahoo.com">E-mail</a>
        </div>
      </div>
    );
  }
}

export default App;
