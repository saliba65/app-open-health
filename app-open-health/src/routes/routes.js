import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurPartners from "../pages/OurPartners/OurPartners";
import Configurations from "../pages/Configurations/Configurations";
import RoutesPrivate from "./Private/private";

const Routes = () =>
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <RoutesPrivate exact path="/" component={Home} />
        <RoutesPrivate exact path="/sobre-nos" component={AboutUs} />
        <RoutesPrivate exact path="/nossos-parceiros" component={OurPartners} />
        <RoutesPrivate exact path="/configuracoes" component={Configurations} />
      </Switch>
    </Suspense>
  </BrowserRouter>;

export default Routes;
