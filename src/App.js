import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AppNavbar from './components/AppNavbar';
import WritePost from "./pages/WritePost";
import Blog from "./pages/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router >
            <div>
            <AppNavbar/>
            <Route path="/" />
            <Route path="/writepost" component={WritePost} />
            <Route path="/blog" component={Blog} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
