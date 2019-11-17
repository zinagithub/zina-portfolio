import React from 'react';
//import './App.css'; 
import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
