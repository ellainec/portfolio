import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <Section />
          <Card />
      </div>
    );
  }
}

export default App;
