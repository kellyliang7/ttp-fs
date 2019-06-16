import React from 'react';
import Login from './Login';
import Signup from './Signup';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDisplay: false,
      username: '',
      password: '',
    }
  }



  render() {
    const { username, password } = this.state
    return(
      <div>
        <h2>Welcome</h2>
        {this.state.loginDisplay 
          ? <Login 
              username={username}
              password={password}
              toggleForm={this.toggleForm}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
            />
          : <Signup 
              username={username}
              password={password}
              handleSignup={this.handleSignup}
              toggleForm={this.toggleForm}
              handleChange={this.handleChange}
           />
        }
      </div>
    )
  }
}

export default Auth;