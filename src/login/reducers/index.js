import * as types from '../actions/types';

const initial_state = {
  isLoggingIn: false,
  loginErrors: null,
};

export default (state = initial_state, {
  type,
  payload
}) => {
  switch(type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
      };
    case types.AUTH_LOGIN_FAILED:
      return {
        ...state,
        isLoggingIn: false,
      };
    default:
      return { ...state };
  }
}
