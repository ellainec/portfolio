import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <Section />
          <Skills />
          <Experience />
      </div>
    );
  }
}

export default App;
