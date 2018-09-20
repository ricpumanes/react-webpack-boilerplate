import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const env = process.env.NODE_ENV;

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const NotFound = () => <h1>Not Found</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

let parent = App;

if (env !== 'prod'){
    parent = require('react-hot-loader').hot(module)(App);
}

export default parent;