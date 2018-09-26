import loginReducer from 'RootDir/login/reducers/';
import * as types from 'RootDir/login/actions/types';

const initialState = {
  isLoggingIn: false,
  loginErrors: null,
  userInfo: null,
};

describe("Login Reducer", () => {
  it("should return initial state", () => {
    expect(loginReducer(
      undefined,
      { type: 'di_ni_mag_work' }
    ))
    .toEqual(initialState);
  });
  
  it("should handle AUTH_LOGIN", () => {
    expect(loginReducer(
      undefined,
      { type: types.AUTH_LOGIN }
    )).toEqual({
      ...initialState,
      isLoggingIn: true,
    });
  });

  it("should handle AUTH_LOGIN_SUCCESS", () => {
    expect(loginReducer(
      undefined,
      { type: types.AUTH_LOGIN_SUCCESS, payload: {} }
    ))
    .toEqual({
      ...initialState,
      userInfo: {},
    });
  });

  it("should handle AUTH_LOGIN_FAILED", () => {
    expect(loginReducer(
      undefined,
      { type: types.AUTH_LOGIN_FAILED, payload: { error: "Invalid Login" } }
    ))
    .toEqual({
      ...initialState,
      loginErrors: { error: "Invalid Login" }
    });
  })
  
});