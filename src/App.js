import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'RootDir/login/components/Login';

const env = process.env.NODE_ENV;

const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>Not Found</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
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