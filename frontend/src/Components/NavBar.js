import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props)
  return(
    <nav>
      <NavLink to={"/auth"}>Login</NavLink>
      {props.userLoggedIn 
        ? (
        <div>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/transactions"}>Transactions</NavLink>
          <button>Logout</button>
        </div>
        ) 
        : null}
    </nav>
  )
}

export default NavBar;
