import React, { Component } from 'react';
import logo from './logo.svg';
import jonathan from './jonathan.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <a href="http://linkedin.com/in/jonathan-aquino" target="blank" ><img className="jonathan" src={jonathan} alt="" /></a>
        <h1 className="App-title">Jonathan Aquino</h1>

        <b>Software Engineer</b>
        <div className="links" >
          <a href="http://sayless.fun" target="blank" >Sayless</a>
          <a href="http://167.99.54.86:3030/" target="blank" >Weather</a>
          <a href="http://github.com/jaquin92" target="blank" >Github</a>
          <a href="http://linkedin.com/in/jonathan-aquino " target="blank" >LinkedIn</a>
          <a href="mailto:jaquin92@yahoo.com" >E-mail</a>
        </div>
        <div className="tech" >
          <img className="icon" src={require("./images/react.png")} alt="" />
          <img className="icon" src={require("./images/js.png")} alt="" />
          <img className="icon" src={require("./images/nodejs.png")} alt="" />
          <img className="icon" src={require("./images/postgreSQL.png")} alt="" />
          <img className="icon" src={require("./images/html.png")} alt="" />
          <img className="icon" src={require("./images/css.png")} alt="" />
          <img className="icon" src={require("./images/bootstrap.png")} alt="" />

        </div>

      </div>
    );
  }
}

export default App;
