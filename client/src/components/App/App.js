import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Fylo from "../Fylo/Fylo";
import Nav from "../Nav/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Fylo} />
        <Route path="/fylo-page" exact component={Fylo} />
      </Switch>
    </Router>
  );
};

export default App;
