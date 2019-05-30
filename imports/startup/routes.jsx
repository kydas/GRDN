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
    <Switch>
      <Route exact path="/" component={TestPage}/>
      <Route exact path="/tp2" component={TestPage2}/>
    </Switch>
  </Router>
);


export default renderRoutes;
