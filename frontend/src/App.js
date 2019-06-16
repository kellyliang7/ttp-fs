import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  isLoggedIn = () => {
    axios.get('/users/isLoggedIn')
      .then(res => {
        const user = res.data;
        this.setLoggedInUser(user);
      })
      .catch(err => {
        console.log("Error =>", err);
      })
  }

  componentDidMount(){
    this.isLoggedIn();
  }

  setLoggedInUser = (user) => {
    this.setState({
      user: user,
      userLoggedIn: true
    })
  }

  renderAuth = (routeProps) => {
    return (
      <Auth 
        setLoggedInUser={this.setLoggedInUser}
        {...routeProps}
      />
    )
  }

  render() {
    return(
      <React.Fragment>
        <NavBar /> 
        <Switch>

        </Switch>
      </React.Fragment>
    )
  }
}
 
export default App;
