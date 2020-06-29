import { combineReducers } from 'redux';

import loginReducer from './reducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
