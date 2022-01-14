import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Checkout from "./Containers/Checkout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {

  return (

    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/checkout" element={<div><Header /><Checkout /></div>}>
          </Route>
          <Route exact path="/" element={<div><Header /><Home /><Footer /></div>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )

};

// Comment added by Lovish
export default App;
