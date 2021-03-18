import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/HomePage'

import "./style/Default-style.css"

import Login from './pages/LoginScreen';
import Register from './pages/RegisterScreen';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component ={Home} />
 
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />


        {/* <ComoFunciona/>  */}
        {/* <AboutUs/> */}
      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


