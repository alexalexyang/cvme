import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Landing from "./components/Landing";
import TestPage from "./components/TestPage";
import "./components/css/App.scss";

function App() {
  const submitHandler = e => {
    e.preventDefault();
    console.log("SubmitHandler", e.target.elements);
  };

  const onBlurHandler = e => {
    console.log("onBlurHandler", e.target.value);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/testpage">
          <TestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
