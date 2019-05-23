import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Fylo from "../Fylo/Fylo";
import Nav from "../Nav/Nav";
import Countries from "../Countries/Countries";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Fylo} />
        <Route path="/fylo-page" exact component={Fylo} />
        <Route path="/countries" exact component={Countries} />
      </Switch>
    </Router>
  );
};

export default App;
