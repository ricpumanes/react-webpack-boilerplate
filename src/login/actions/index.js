import * as types from './types';

export const login = formData => ({
  type: types.AUTH_LOGIN,
  payload: formData,
});

export const loginSuccess = userInfo => ({
  type: types.AUTH_LOGIN_SUCCESS,
  payload: userInfo,
});

export const loginFailed = error => ({
  type: types.AUTH_LOGIN_FAILED,
  payload: error,
});