import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props)
  return(
    <nav>
      {props.userLoggedIn 
        ? (
        <div>
          <ul className="menu">
            <li>><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
            <li><NavLink to={"/transactions"}>Transactions</NavLink></li>
          </ul>
            <button onClick={props.logout}>Logout</button>
        </div>
        ) 
        : null}
    </nav>
  )
}

export default NavBar;
