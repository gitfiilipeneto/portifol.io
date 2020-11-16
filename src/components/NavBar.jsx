import React from "react"
import logo from "../images/navbar-logo.png"
import "../style/Default-style.css"



const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "rgba(84, 204, 255, 0.7)"}}>
            
            <img src={logo}  width="36px" height="36px" style={{margin:"10px"}} class="d-inline-block align-top"/>
            <a className="navbar-brand" href="#" style={{color:"#ffffff", fontWeight:"bold", fontSize:"18px"}}>portifol.io</a>
              
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
            </button>
      
        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              
            </li>
          {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Desativado</a>
            </li> */}
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">teste</a>
            </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Desativado</a>
            </li>
          </ul>

            </div>
      </nav>
    )
}

export default NavBar
