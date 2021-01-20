import React from "react";
import AppContext from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './views/Header';
import Home from "./views/Home/Home";
import { Payment } from "./views/Payment/Payment";


const contextElements = {}


export const App = () => (

  <Router>
    <AppContext.Provider value={contextElements}>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>      
      </Switch>
    </AppContext.Provider>
  </Router>
);