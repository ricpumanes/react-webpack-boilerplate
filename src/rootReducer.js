import { combineReducers } from 'redux';
import loginReducer from './login/reducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
