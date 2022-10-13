import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Login from "../../pages/Login/Login.js";
// import Home from "../../pages/Home/Home";
// import RoutesPrivate from "./Private/private";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
// import Empresas from "../../pages/Empresas/Empresas";

const Routes = () =>
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>;

export default Routes;
