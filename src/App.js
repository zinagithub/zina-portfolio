import React from 'react';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

const Home = () => (
  <div>
     <About />
     <Skills />
     <Projects />
     <Contact />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
          <Route path = "/about" component = {About} />
          <Route path = "/skills" component = {Skills} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/"  component = {Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;