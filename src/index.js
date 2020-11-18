import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import RegisterPage from "./components/RegisterPage"

// import "./style/Default-style.css"



ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <HeroSection/>
    <AboutUs/> 
    <RegisterPage/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


