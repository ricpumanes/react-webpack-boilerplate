import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validate from 'validate.js';

import { usersLogin } from '../actions';

const constraints = {
  email: {
    email: {
      message: 'You have entered an invalid email',
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'Password must be at least 6 characters',
    },
  },
};

const useLogin = () => {
  const { loginError, isLoggingIn } = useSelector((state) => state.loginReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: null, password: null });

  const dispatch = useDispatch();

  const _onChangeEmail = (v) => setEmail(v);
  const _onChangePassword = (v) => setPassword(v);
  const _onValidate = (field, value) => {
    const validateError = validate.single(value, constraints[field]);
    setErrors({
      ...errors,
      [field]: (validateError && validateError.join('')) || null,
    });
  };

  const _onLogin = (e) => {
    e && e.preventDefault && e.preventDefault();
    if (!errors.email && !errors.password) {
      dispatch(usersLogin({ email, password }));
    }
  };

  return {
    email,
    password,
    errors,
    loginError,
    isLoggingIn,
    onChangeEmail: _onChangeEmail,
    onChangePassword: _onChangePassword,
    onValidate: _onValidate,
    onLogin: _onLogin,
  };
};

export default useLogin;
