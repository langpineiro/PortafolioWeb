import React from "react";
import Trabajo from "../images/Trabajo.jpg";
import "./Navbar.css";
import * as Icon from 'react-bootstrap-icons';
import Tecnologias  from "./Tecnologias";
import Proyectos from './Proyects'; 
const Inicio = () => {
  return (
    <>
    <section id="quiensoy" className="container">
      <div className="row mt-5">
        <div className="col-md-7">
             <h3>Anthony <span>Lang</span></h3>
             <p>Soy estudiante de ingenieria en sistemas informáticos actualmente he tenido experiencia con lenguajes de programación tales como: C#, MYSLQ, SQLSERVER, Javascript, HTML, Bootstrap, Material UI, ReactJs, y Nodejs</p>
             <a className="btn btn-outline-success" role="button" href="https://drive.google.com/file/d/1DlzaCMFX33Mdn3-F8G1Dm4t2pf0sKHAe/view?usp=sharing" target="_blank">Ver Cv <Icon.Eye/></a>
        </div>
        <div className="col-md-4">
        <img src={Trabajo} className="img-fluid" alt="Codigo"/>
        </div>
      </div>
    </section>
    <Tecnologias/>
    <Proyectos/> 
    </>
  );
};

export default Inicio;
