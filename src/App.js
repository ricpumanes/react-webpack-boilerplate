import React, { Component } from 'react';
import PropTypes from 'prop-types';

const env = process.env.NODE_ENV;

class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        app!!
        Lorem ipsum dolor sit amet.
      </div>
    );
  }
}
let parent = App;
if (env !== 'prod'){
    parent = require('react-hot-loader').hot(module)(App);
}

export default parent;