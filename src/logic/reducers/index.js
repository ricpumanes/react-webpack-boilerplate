import { makeReducer } from '../common/redux-boilerplate-creators';
import { LOGIN } from '../actions/types';

const loginReducer = makeReducer(
  {
    isLoggingIn: false,
    loginError: null,
  },
  {
    [LOGIN.request]: (state) => {
      return { ...state, isLoggingIn: true, loginError: null };
    },
    [LOGIN.fulfilled]: (state) => {
      return { ...state, isLoggingIn: false, loginError: null };
    },
    [LOGIN.rejected]: (state, { payload }) => {
      return { ...state, isLoggingIn: false, loginError: payload };
    },
  }
);

export default loginReducer;
