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
import Contador from './components/Contador';

import "./style/Default-style.css"
import ContactInfo from './components/ContactUs';




ReactDOM.render(
  <React.StrictMode>
    <ScrollArrow/>
    <NewHero/>
    {/* <ComoFunciona/>  */}
    <ContactInfo/>
    {/* <Contador/> */}
    {/* <AboutUs/> */}
    {/* <RegisterPage/> */}
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


