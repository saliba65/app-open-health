import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import RoutesPrivate from "./Private/private";

const Routes = () =>
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <RoutesPrivate exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>;

export default Routes;
