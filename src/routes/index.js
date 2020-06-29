import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../views/Login';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};

export default index;
