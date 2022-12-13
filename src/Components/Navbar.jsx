import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <ul id="navbar" className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
             ¿Quién soy?
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/contact">
             Contactar
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
