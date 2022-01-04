import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

const App = () => {
  
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    )
  
};
//This is a comment.
export default App;
