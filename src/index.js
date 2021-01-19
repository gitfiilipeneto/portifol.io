import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollArrow from "./components/ScrollTop"
import NewHero from './components/NewHero';
import PageCadastro from './components/Cadastro'
import "./style/Default-style.css"
import ContactInfo from './components/ContactUs';




ReactDOM.render(
  <React.StrictMode>
    <ScrollArrow/>
    <NewHero/>
    {/* <ComoFunciona/>  */}
    <ContactInfo/>
    <PageCadastro/>
    {/* <AboutUs/> */}
    {/* <RegisterPage/> */}
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


