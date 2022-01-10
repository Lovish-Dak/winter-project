import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

import Header from "./Components/Header";

import Footer from "./Components/Footer";


const App = () => {

  return (

    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
    </Switch>
  )

};

export default App;
