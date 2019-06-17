import React from 'react';
import NavBar from './Components/NavBar'
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from './Components/Auth/Auth'
import PrivateRoute from './Components/Auth/PrivateRoute'
import UserPortfolio from './Components/Portfolio/UserPorfolio'
import UserTransactions from './Components/Transactions/UserTransactions'

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

  logout = () => {
    axios.get('/users/logout')
      .then(res => {
        this.setLoggedInUser({});
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
        <NavBar userLoggedIn={userLoggedIn} logout={this.logout} /> 
        <Switch>
          <Route exact path='/' render={this.renderAuth} />
          <PrivateRoute 
            userLoggedIn={userLoggedIn}
            path='/portfolio' 
            user={this.state.user}
            component={UserPortfolio} 
          />
          <PrivateRoute 
            userLoggedIn={userLoggedIn}
            path='/transactions' 
            user={this.state.user}
            component={UserTransactions} 
          />
        </Switch>
      </React.Fragment>
    )
  }
}
 
export default App;
