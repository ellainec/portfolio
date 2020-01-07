import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Experience from './Experience';
import Projects from './Projects';
import ContactForm from './ContactForm'
import Education from './Education';
import portrait from '../img/me.jpg';
class Main extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <div className="container">
              <hr />
              <div className="d-flex columnMobile">
                  <img id="self-portrait" width="150" height="161" src={portrait} alt="Ellaine smiling amongst a background of flowers"/>
                  <div className="float-right d-flex align-items-center">
                      <div><p>Hello, my name is Ellaine and I'm a software developer graduating from BCIT's Computer Systems Technology program (Data Communications option) in May 2020.
                          During my 8 month co-op at Realtor.com I gained experience with developing back end services with Node.js and AWS, and React on the front end.
                          Before I began my coding journey, I had graduated from Simon Fraser University with a Bachelor of Business
                          Administration. I spent around 4 years helping a IT services company source, negotiate and manage
                          their global vendors and contracts.</p>
                          <p>I have a fascination with electronics and I love learning about new components and building small circuits. In the near future I'd like to combine 
                            this knowledge with my other interest of data communications to build cool, connected things.</p></div>
                  </div>
              </div>
          </div>
          <Experience />
          <Projects />
          <Education />
          <ContactForm/>
      </div>
    );
  }
}

export default Main;