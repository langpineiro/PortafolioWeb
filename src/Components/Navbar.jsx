import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <ul id="navbar" className="nav justify-content-center">
        <li className="nav-item mr-3">
        <span className="nav-link active" aria-current="page">
        <Link to={"/"}>¿Quién soy?</Link>
        </span>
        </li>
        <li className="nav-item">
        <span className="nav-link active">
        <Link to={"/contact"}>Contacto</Link>
        </span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
