import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props)
  return(
    <nav className="navigation">
      {props.userLoggedIn 
        ? (
        <div>
          <ul className="menu">
          <p>Stock Portfolio App</p>
          <div className="navlinkContainer">
            <li><NavLink className="navlink" to={"/portfolio"}>Portfolio</NavLink></li>
            <li><NavLink className="navlink" to={"/transactions"}>Transactions</NavLink></li>
            <button className="logoutButton"onClick={props.logout}>Logout</button>
          </div>
          </ul>
        </div>
        ) 
        : null}
    </nav>
  )
}

export default NavBar;
