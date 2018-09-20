import loginReducer from '../../src/login/reducers/'
describe('Login Reducer', () => {
  it('has a default state', () => {
    expect(loginReducer(undefined, { type: 'TEST_LANG_NI' })).toEqual({ isLoggingIn: false, loginErrors: null });
  });
  it('has should handle AUTH_LOGIN', () => {
    expect(loginReducer(undefined, { type: 'AUTH_LOGIN' })).toEqual({ isLoggingIn: true, loginErrors: null });
  });
  it('has should handle AUTH_LOGIN_SUCCESS', () => {
    expect(loginReducer(undefined, { type: 'AUTH_LOGIN_SUCCESS' })).toEqual({ isLoggingIn: false, loginErrors: null });
  });
});