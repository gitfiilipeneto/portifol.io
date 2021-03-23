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

const Routes = () => {
  return (
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login}/>

    </Switch>

  )

}

export default Routes
