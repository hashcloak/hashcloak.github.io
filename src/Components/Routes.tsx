import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";

export const ROUTE_LINKS = {
  Home: "/hashcloak-react",
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTE_LINKS.Home} component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes