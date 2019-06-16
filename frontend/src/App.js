import React from 'react';
import NavBar from './Components/NavBar'
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from './Components/Auth/Auth'
import PrivateRoute from './Components/Auth/PrivateRoute'
import Portfolio from './Components/Portfolio/UserPorfolio'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      user: {}
    }
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
    const {userLoggedIn} = this.state
    return(
      <React.Fragment>
        <NavBar /> 
        <Switch>
          <Route exact path='/auth' render={this.renderAuth} />
          <PrivateRoute 
            userLoggedIn={userLoggedIn}
            path='/portfolio' 
            component={Portfolio} 
          />
        </Switch>
      </React.Fragment>
    )
  }
}
 
export default App;
