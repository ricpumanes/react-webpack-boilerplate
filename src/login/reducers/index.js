import * as types from '../actions/types';

const initial_state = {
  isLoggingIn: false,
  loginErrors: null,
  userInfo: null,
};

export default (state = initial_state, {
  type,
  payload,
}) => {
  switch(type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        loginErrors: null,
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginErrors: null,
        userInfo: payload,
      };
    case types.AUTH_LOGIN_FAILED:
      return {
        ...state,
        isLoggingIn: false,
        loginErrors: payload,
      };
    default:
      return { ...state };
  }
}
