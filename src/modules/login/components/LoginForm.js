import React from 'react';
import useLogin from '../../../logic/hooks/useLogin';

function LoginForm () {
  const { email, password, errors, loginError, isLoggingIn, onChangeEmail, onChangePassword, onValidate, onLogin } = useLogin();
  return (
    <div>
      <form onSubmit={onLogin}>
        <h1>Login</h1>
        {loginError && <p style={{ color: 'red' }}>Invalid Login</p>}
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={e => onChangeEmail(e.target.value)}
            onBlur={e => onValidate('email', email)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => onChangePassword(e.target.value)}
            onBlur={e => onValidate('password', password)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" disabled={isLoggingIn}>login</button>
      </form>
    </div>
  );
}

export default LoginForm;