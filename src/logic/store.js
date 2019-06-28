import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import serviceCaller from './common/serviceCallers';

export default createStore(
  rootReducer,
  applyMiddleware(thunk, logger, serviceCaller),
);
