import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Login from "../../pages/Login/Login.js";
// import Home from "../../pages/Home/Home";
// import RoutesPrivate from "./Private/private";
import Login from "../pages/Home/Login";
// import Empresas from "../../pages/Empresas/Empresas";

const Routes = () =>
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Suspense>
  </BrowserRouter>;

export default Routes;
