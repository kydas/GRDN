// Manages routing for the app.

import React from 'react';
import { Router, Route, Switch} from "react-router";
import {createBrowserHistory} from 'history';

//Routes
import TestPage from '../ui/TestPage';
import TestPage2 from '../ui/TestPage2';

const history = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <AppShell>
      <Switch>
        <Route exact path="/" component={TestPage}/>
        <Route exact path="/tp2/:id" component={TestPage2}/>
      </Switch>
    </AppShell>
  </Router>
);


export default renderRoutes;
