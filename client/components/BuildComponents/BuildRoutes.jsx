import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BuildsAll from './BuildsAll';
import BuildSingle from './BuildSingle';
import Dashboard from './Dashboard';

const BuildRoutes = () => (
  <Switch>
    <Route exact path="/builds" component={BuildsAll} />
    <Route exact path="/builds/dashboard/:buildid" component={Dashboard} />
    <Route path="/builds/:buildid" component={BuildSingle} />
  </Switch>
);

export default BuildRoutes;