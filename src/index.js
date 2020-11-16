import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar"




ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <div>Index page - renderiza home até register page</div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


