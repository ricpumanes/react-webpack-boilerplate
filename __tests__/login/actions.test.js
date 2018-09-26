import configureStore from 'redux-mock-store';
import * as actions from 'RootDir/login/actions/';
import * as types from 'RootDir/login/actions/types';

const mockStore = configureStore();
const store = mockStore();

const userAccount = {
  email: 'test@testing.com',
  password: 'tmp12345',
};

const errorObj = {
  error: "Invalid Login",
};

describe("Login Actions", () => {
  beforeEach(() => {
    // each time you invoke an action, it is stored in an Array of actions
    // for easier testing, clear the Array of actions before each test case
    store.clearActions();
  });
  
  it("login() should return AUTH_LOGIN and contain user payload", () => {
    store.dispatch(actions.login(userAccount));
    expect(store.getActions()[0]).toEqual({ type: types.AUTH_LOGIN, payload: userAccount });
  });

  it("loginSuccess() should return AUTH_LOGIN_SUCCESS and contain user info payload", () => {
    store.dispatch(actions.loginSuccess(userAccount));
    expect(store.getActions()[0]).toEqual({ type: types.AUTH_LOGIN_SUCCESS, payload: userAccount });
  });

  it("loginFailed() should return AUTH_LOGIN_FAILED and contain error info payload", () => {
    store.dispatch(actions.loginFailed(errorObj));
    expect(store.getActions()[0]).toEqual({ type: types.AUTH_LOGIN_FAILED, payload: errorObj });
  });
  
});