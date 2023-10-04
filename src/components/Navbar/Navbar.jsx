import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function YourComponent() {
  return (
   <div className="navbar">
    <div className="nav-left">
      <div className="nav-image">
        <img src="	https://www.scopecinemas.com/img/scope-cinemas-logo.svg" alt="" className="image" />
      </div>
    </div>
    <div className="nav-center">
   Home 

   Movies

Theaters 

Advertising
      
    </div>
    <div className="nav-right">
      <div className="book-ticket">
      <button type="button" class="btn btn-outline-danger">Book ticket</button>

      </div>
      <div className="login-button">
      <button type="button" class="btn btn-outline-danger">Login</button>

      </div>
    </div>
  
   </div>
  );
}
