import React, { Component } from 'react'

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  onSubmit = (event) => {
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="email" id="email" placeholder="Email Address" value={this.state.email} onChange={this.onChange} required />
          <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;