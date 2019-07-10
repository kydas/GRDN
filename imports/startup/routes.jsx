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
import LoginPage from '../ui/pages/LoginPage';
import LogoutPage from '../ui/pages/LogoutPage';
import DetailPage from '../ui/pages/DetailPage';
import GardenPage from '../ui/pages/GardenPage';
import GardenPlantDetailPage from '../ui/pages/GardenPlantDetailPage';

const history = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <AppShell>
      <Switch>
        <Route exact path="/" component={GardensPage}/>
        <Route exact path="/profile" component={UserPage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/plant/:id" component={DetailPage} />
        <Route exact path="/garden/:id" component={GardenPage} />
        <Route exact path="/garden/:id/:plantId" component={GardenPlantDetailPage} />
        // Add more routes below
      </Switch>
    </AppShell>
  </Router>
);

export default renderRoutes;
