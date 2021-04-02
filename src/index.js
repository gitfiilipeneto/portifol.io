import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


import "./style/Default-style.css"

import Home from './pages/HomePage'
import Login from './pages/LoginScreen';
import Register from './pages/RegisterScreen';
import GlobalStyle from './style/GlobalStyleCSSReset';
import Routes from './pages/routes';




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <BrowserRouter>

      <Routes/>


      </BrowserRouter>
   
      
  </React.StrictMode>,
  document.getElementById('root')
);


