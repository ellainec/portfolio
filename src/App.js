import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm'
class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <Section />
          <Projects />
          <Skills />
          <Experience />
          <ContactForm/>
      </div>
    );
  }
}

export default App;
