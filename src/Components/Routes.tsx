import { VFC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

export const ROUTE_LINKS = {
  Home: '/',
  NotFound: '*',
};

const Routes: VFC = () => (
  <BrowserRouter basename={ROUTE_LINKS.Home}>
    <Switch>
      <Route path={ROUTE_LINKS.Home} exact component={Home} />
      <Redirect from={ROUTE_LINKS.NotFound} to={ROUTE_LINKS.Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
