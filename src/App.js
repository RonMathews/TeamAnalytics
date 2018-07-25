import React, { Component } from 'react';
import PersonAnalytics from "./person/PersonAnalytics";
import TeamAnalytics from "./team/TeamAnalytics";
import { Persona } from "office-ui-fabric-react/lib/Persona";
import {
  browserHistory,
  IndexRoute,
  Route,
  Router,
  RouterState
} from "react-router";

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
          <Route path="/personal" component={ PersonAnalytics }>
            <IndexRoute component={ PersonAnalytics }></IndexRoute>
          </Route>
          <Route path="/team" component={ TeamAnalytics }>
            <IndexRoute component={ TeamAnalytics }></IndexRoute>
          </Route>
      </Router>
    );
  }
}

export default App;