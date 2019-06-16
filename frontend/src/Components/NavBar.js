import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props)
  return(
    <nav>
      {props.userLoggedIn 
        ? (
        <div>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/transactions"}>Transactions</NavLink>
          <button onClick={props.logout}>Logout</button>
        </div>
        ) 
        : null}
    </nav>
  )
}

export default NavBar;
