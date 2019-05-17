import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Fylo from "../Fylo/Fylo";
import Nav from "../Nav/Nav";

const App = () => {
  return (
    <main>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Fylo} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
