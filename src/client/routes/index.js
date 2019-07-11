import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

const Home = () => <h1>Home!</h1>;
const NotFound = () => <h1>Not Found</h1>;

const ClientRoutes = () => {
  return (
    <Switch>
      <Route exact path="/client" component={Home} />
      <Route path="/client/login" component={Login} />
      <Route path="/client/*" component={NotFound} />
    </Switch>
  );
}

export default ClientRoutes;