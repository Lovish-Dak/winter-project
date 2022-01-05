import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

import Header from "./Components/Header";

const App = () => {

  return (
    <Switch>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )

};

// Comment added by Lovish
export default App;
