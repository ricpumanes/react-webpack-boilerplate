import React from 'react';
import Login from 'RootDir/login/components/Login';
import { shallow } from 'enzyme';

describe("<Login />", () => {
  const mockLogin = jest.fn();
  const wrapper = shallow(<Login actions={{ login: mockLogin }} />);
  const emailText = 'test@testing.com';
  const passwordText = '12345667';

  describe("display", () => {
    it("should render without throwing error", () => {
      expect(wrapper.find('form').exists()).toBe(true);
    });
  
    it("should render email input", () => {
      const emailInput = wrapper.find('#email');
      expect(emailInput.exists()).toBe(true);
      expect(emailInput.length).toEqual(1);
    });
  
    it("should render password input", () => {
      const passwordInput = wrapper.find('#password');
      expect(passwordInput.exists()).toBe(true);
      expect(passwordInput.length).toEqual(1);
    });
  
    it("should render login button", () => {
      const loginButton = wrapper.find('button[type="submit"]');
      expect(loginButton.exists()).toBe(true);
      expect(loginButton.length).toEqual(1);
    });
  
    it("should have no values on text input on first render", () => {
      const states = wrapper.state();
      expect(states).toEqual({ email: '', password: '' });
    });
  });

  describe("email input", () => {
    it("should respond to onChange event and update the state", () => {
      wrapper.find('#email').simulate('change', { target: { id: 'email', value: emailText }});
      expect(wrapper.state('email')).toEqual(emailText);
    });
  });
  
  describe("password input", () => {
    it("should respond to onChange event and update the state", () => {
      wrapper.find('#password').simulate('change', { target: { id: 'password', value: passwordText } });
      expect(wrapper.state('password')).toEqual(passwordText);
    });
  });

  describe("submit", () => {
    it("should call login() action when form is submitted", () => {
      wrapper.find('form').simulate('submit', { preventDefault: () => null });
      expect(mockLogin.mock.calls.length).toEqual(1);
    });
    
    it("should pass the correct arguments to login() action when form is submitted", () => {
      wrapper.find('form').simulate('submit', { preventDefault: () => null });
      expect(mockLogin.mock.calls[0][0]).toEqual({ email: emailText, password: passwordText });
    });
  });
  
});