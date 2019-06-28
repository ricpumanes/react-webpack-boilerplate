import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './modules/login/components/Login';

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

export default App;