import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/Main';
import Login from './pages/Login';
import Home from './pages/Home';

const NotFound = () => <h1>Not Found</h1>;

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;