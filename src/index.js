import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollArrow from "./components/ScrollTop"
import NewHero from './components/NewHero';
import AboutUs from "./components/AboutUs"
import RegisterPage from "./components/RegisterPage"
import ComoFunciona from './components/HowItWorks';

import "./style/Default-style.css"




ReactDOM.render(
  <React.StrictMode>
    <ScrollArrow/>
    <NewHero/>
    
    <ComoFunciona/> 
    {/* <AboutUs/> */}
    {/* <RegisterPage/> */}
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


