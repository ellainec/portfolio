import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm'
import Education from './components/Education';
import portrait from './img/me.jpg';

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <div className="container">
              <hr />
              <div className="d-flex columnMobile">
                  <img id="self-portrait" width="150" height="161" src={portrait} alt="Ellaine smiling amongst a background of flowers"/>
                  <div className="float-right d-flex align-items-center">
                      <div><p>Hello, my name is Ellaine and I'm a software developer in training at BCIT's Computer Systems Technology program.
                          Before I began my coding journey, I had graduated from Simon Fraser University with a Bachelor of Business
                          Administration. I spent around 4 years helping a IT services company source, negotiate and manage
                          their global vendors and contracts.</p>
                          <p>Skills I'm currently improving on: Java, Javascript (ES6), React, Node.js, Solidity, HTML, CSS, Git </p></div>
                  </div>
              </div>
          </div>
          <Projects />
          <Experience />
          <Education />
          <ContactForm/>
      </div>
    );
  }
}

export default App;
