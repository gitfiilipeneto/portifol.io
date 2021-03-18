import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollArrow from "./components/ScrollTop"
import NewHero from './components/NewHero';

import "./style/Default-style.css"
import ContactInfo from './components/ContactUs';
import Register from './pages/RegisterScreen'
import Login from './pages/LoginScreen'




ReactDOM.render(
  <React.StrictMode>
    <ScrollArrow/>
    <NewHero/>
    {/* <ComoFunciona/>  */}
    
    <Register/>
    <Login/>
    <ContactInfo/>
  
    {/* <AboutUs/> */}
    {/* <RegisterPage/> */}

    
    
  </React.StrictMode>,
  document.getElementById('root')
);


