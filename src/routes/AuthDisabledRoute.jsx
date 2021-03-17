import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const AuthDisabledRoute = ({ component: Component, ...rest }) => {
  let { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
