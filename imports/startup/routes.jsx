// Manages routing for the app.

import React from 'react';
import { Router, Route, Switch} from "react-router";
import {createBrowserHistory} from 'history';
import AppShell from "../ui/components/AppShell";

//Routes
import TestPage from '../ui/pages/TestPage'; // Temporary. Delet this.
import TestPage2 from '../ui/pages/TestPage2'; // Temporary. Delete this.

const history = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <AppShell>
      <Switch>
        // Add more routes below
        // Example only -- please delete the following
        <Route exact path="/" component={TestPage}/>
        // Note the :variable below. This allows us to pass arbitrary parameters
        // to urls and access them within the route.
        <Route exact path="/tp2/:id" component={TestPage2}/>
      </Switch>
    </AppShell>
  </Router>
);


export default renderRoutes;
