import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ClientRoutes from './client/routes/';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <ClientRoutes />
      </React.Fragment>
    </Router>
  );
}

export default App;