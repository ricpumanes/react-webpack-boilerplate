import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ClientRoutes from './client/routes/';
import AdminRoutes from './admin/routes/';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <ClientRoutes />
        <AdminRoutes />
      </React.Fragment>
    </Router>
  );
};

export default App;