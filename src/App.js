import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

import Header from "./Components/Header";

const App = () => {

  return (

    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  )

};

// Comment added by Lovish Dak
export default App;
