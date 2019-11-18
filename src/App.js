import React from 'react';
//import './App.css'; 
import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import FooterElm from './components/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <FooterElm />
    </div>
  );
}

export default App;
