import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

const Home = () => <h1>Admin Home!</h1>;
const NotFound = () => <h1>Not Found</h1>;

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/admin" component={Home} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/*" component={NotFound} />
    </Switch>
  );
}

export default AdminRoutes;