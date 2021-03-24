import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/HomePage'
import Login from '../pages/LoginScreen';
import Register from '../pages/RegisterScreen';
import pageNotFound from "../pages/Page404";

const Routes = () => {
  return (
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login} exact/>
      <Route path="" component={pageNotFound}/>

    </Switch>

  )

}

export default Routes
