import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import AppNavbar from './components/AppNavbar';
import WritePost from "./pages/WritePost";
import Blog from "./pages/Blog";
import Article from "./pages/Article"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router >
            <div>
            <AppNavbar/>
            <Route path="/" />
            <Route path="/writepost" component={WritePost} />
            <Route path="/blog" component={Blog} />
            <Route path="/article/:id" component={Article}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
