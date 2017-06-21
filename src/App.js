import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router >
            <div>
            <AppNavbar/>
            <Route path="/" />
            <Route path="/archives" component={Archives} />
            <Route path="/settings" component={Settings} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
