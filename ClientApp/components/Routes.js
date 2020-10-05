import React from "react";
import { Route, Switch } from "react-router";
import Home from "./home/Home";
import Speakers from "./speakers/Speakers";
import Login from "./common/Login";
import RouteNotFound from "./RouteNotFound";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/login" component={Login} />
        <Route render={() => <RouteNotFound />} />
      </Switch>
    </div>
  );
};

export default Routes;
