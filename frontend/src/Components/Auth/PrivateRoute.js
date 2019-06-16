import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ userLoggedIn: userLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userLoggedIn ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;