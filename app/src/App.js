import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar, Header, Home, ResultList} from './client/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Header/>
      <Home/>
      </div>
    );
  }
}

export default App;
