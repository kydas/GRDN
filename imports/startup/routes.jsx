import React from 'react';
import { Router, Route, Switch} from "react-router";
import {createBrowserHistory} from 'history';
import AppShell from "../ui/components/AppShell";

/*
 Manages routing for the app. Add new pages in the indicated place below. Use
 /:varname in routes to include url parameters.
*/

//Routes
import UserPage from '../ui/pages/UserPage';
import GardensPage from '../ui/pages/GardensPage';
import SearchPage from '../ui/pages/SearchPage';

const history = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <AppShell>
      <Switch>
        <Route exact path="/" component={GardensPage}/>
        <Route exact path="/profile" component={UserPage}/>
        <Route exact path="/search" component={SearchPage}/>
        // Add more routes below
      </Switch>
    </AppShell>
  </Router>
);

export default renderRoutes;
