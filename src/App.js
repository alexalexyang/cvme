import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Landing from "./components/Landing";
import TestPage from "./components/TestPage";
import "./components/css/App.scss";

function App() {
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
