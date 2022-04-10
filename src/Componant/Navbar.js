import React from 'react'
import {  Link } from "react-router-dom";
function Navbar() {
  return (
    <>
<header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src= "https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            
            <a className="navbar-brand" href="#">RP Grop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
                  
                </li>
                <li className="nav-item">
                <Link to={'/product'} className="nav-link">Product</Link>
                  
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/service1"} className="dropdown-item"> Service1</Link>
                   <Link to={"/service2"} className="dropdown-item"> Service2</Link>
                   
                  </div>
                </li>
                <li className="nav-item">
                <Link to={"/contact"} className="nav-link"> Contactus</Link>
                    
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
    </header>

    </>
  )
}

export default Navbar