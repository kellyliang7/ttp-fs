import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <NavBar /> 
      </React.Fragment>
    )
  }
}
 
export default App;
