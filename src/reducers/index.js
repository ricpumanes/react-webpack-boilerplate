import { combineReducers } from 'redux';
import appReducer from './app';

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
