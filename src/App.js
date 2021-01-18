import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './views/Header';
import { Home } from "./views/Home/index";
import { Payment } from "./views/Payment/Payment";

export const App = () => (
  <Router>
      <Header/>
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
