import React from 'react';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';
import '../../App.css'


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDisplay: false,
      username: '',
      password: '',
      email: ''
    }
  }

  loginUser = () => {
    const { username, password } = this.state;
    axios.post('/users/login', {username, password})
      .then(res => {
        const user = res.data;
        this.props.setLoggedInUser(user);
        this.props.history.push('/portfolio');
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.loginUser();
  }

  handleSignup = (e) => {
    const { username, password, email } = this.state;
    e.preventDefault();
    // Make NET request
    axios.post('/users/new', {username, password, email})
      .then(res => {
        this.loginUser();
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        loginDisplay: !prevState.loginDisplay
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    const { username, password, email } = this.state
    return(
      <div>
        <h2>Welcome to Stock Portfolio!</h2>
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
              email={email}
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