import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component{
  render() {
    return (
      <div className="App" id="top">
        <NavBar  />
        <Header  />
        <About  />
        <Skills  />
        <Projects  />
        <Contact  />
      </div>
    );
  }
}

export default App;
