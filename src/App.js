import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "views/Home";

export const App = () => (
  <Router>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/payment">
          <Payment/>
        </Route>
    </Switch>
  </Router>
);