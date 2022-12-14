import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../context/auth";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated() ? <Component {...rest} /> : <Redirect to="/login" />}
    />
  );
};

export default RoutesPrivate;
