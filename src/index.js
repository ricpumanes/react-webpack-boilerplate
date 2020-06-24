import React from 'react';
import { render } from 'react-dom';

import '../public/assets/styles/sass/_index.scss';

import App from './App';
import { init as initFeathersClient } from './feathersClient';

initFeathersClient();

render(<App />, document.getElementById('app-root'));
