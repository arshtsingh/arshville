import React from 'react';
import './App.css';
import ArshvilleLogo from './arshville.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Stickers from "./components/Stickers";
import Quotes from "./components/Quotes";

function App() {
  return (
      <Router>
        <div className="App">
          <img className="App-logo" src={ArshvilleLogo} alt="Logo" />
          <nav className="navbar">
            <ul className="navbar-ul">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
              <li><Link to={'/gallery'} className="nav-link">Gallery</Link></li>
              <li><Link to={'/stickers'} className="nav-link">Stickers</Link></li>
              <li><Link to={'/quotes'} className="nav-link">Quotes</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/stickers' component={Stickers} />
            <Route path='/quotes' component={Quotes} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
