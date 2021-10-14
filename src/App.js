import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import HeaderSpacer from "./components/HeaderSpacer.js";
import FooterSpacer from "./components/FooterSpacer.js";

import Introduction from "./pages/Introduction.js";
import Projects from "./pages/Projects.js";
import Repositories from "./pages/Repositories.js";
import Experience from "./pages/Experience.js";

function App() {
  return (
    <Router>
      <div className="flex">
        <Nav />
        <HeaderSpacer />

        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/repositories">
            <Repositories />
          </Route>
        </Switch>

        <FooterSpacer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
