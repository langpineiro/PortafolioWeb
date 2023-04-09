import React from "react";
import proyecto1 from '../images/proyectoplaneat.png'
import * as Icon from 'react-bootstrap-icons';
import proyecto2 from '../images/proyecto2.png'
import proyecto3 from '../images/proyecto3.png'
import proyecto4 from '../images/proyecto4.png'
import proyecto5 from '../images/proyecto5.png'
function Proyects() {
  return (
    <>
      <div className="container text-center align-items:center justify-content: center mt-3">
        <h2>
          <span>Proyectos</span>
        </h2>
        <div className="row row-cols-auto">
          <div className="col">
            <div
              className="card rounded shadow"
              style={{ width: "300px", marginTop: "10px" }}
            >
              <img className="img-fluid img-top" src={proyecto1} alt="logoHtml" />
              <div className="card-body">
                <h5 className="card-title">Calculadora de Peso en otros planetas</h5>
                <h6 className="card-content">
                  Pequeña aplicación que calcula cual seria tu peso en el planeta Marte o en el planeta Jupiter, desarrollada con Bootstrap,javascript y html.
                </h6>
                <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro/cursoWeb" target="_blank"><Icon.Github/></a>
                <a className="btn btn-outline-dark" role="button" href="https://planets-ten.vercel.app/"  target="_blank"><Icon.ArrowUpRightCircle/></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card rounded shadow"
              style={{ width: "300px", marginTop: "10px" }}
            >
              <img className="img-fluid img-top" src={proyecto2} alt="logoHtml" />
              <div className="card-body">
                <h5 className="card-title">Contador de Mayúsculas y minúsculas</h5>
                <h6 className="card-content">
                  Aplicación desarrollada con HTML, Bootstrap y Javascript, como parte de una tarea en mi curso de Automatas y lenguaje formales, esta app cuenta en base a producciones de grámatica cuantas mayúsculas y minúsculas hay en una producción.
                </h6>
                <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro/ContadorTerminalesyNoTerminales" target="_blank"><Icon.Github/></a>
                <a className="btn btn-outline-dark" role="button" href="https://contador-terminalesy-no-terminales.vercel.app/"  target="_blank"><Icon.ArrowUpRightCircle/></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card rounded shadow"
              style={{ width: "300px", marginTop: "10px" }}
            >
              <img className="img-fluid img-top" src={proyecto3} alt="logoHtml" />
              <div className="card-body">
                <h5 className="card-title">Derivador de gramáticas libres de contexto</h5>
                <h6 className="card-content">
                  Aplicación desarrollada con HTML,CSS, y Javascript para el curso de lenguajes formales, esta aplicación deriva de una serie de producciones una cadena que es aceptada por la gramática que representan dichas producciones.
                </h6>
                <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro/gramatica-libre-contexto" target="_blank"><Icon.Github/></a>
                <a className="btn btn-outline-dark" role="button" href="https://gramatica-libre-contexto.vercel.app/"  target="_blank"><Icon.ArrowUpRightCircle/></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card rounded shadow"
              style={{ width: "300px", marginTop: "10px" }}
            >
              <img className="img-fluid img-top" src={proyecto4} alt="logoHtml" />
              <div className="card-body">
                <h5 className="card-title">Tickets App</h5>
                <h6 className="card-content">
                  Aplicación generadora de turnos hecha con ReactJs, empleando un concepto de máquina de estados.
                </h6>
                <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro/TicketsApp" target="_blank"><Icon.Github/></a>
                <a className="btn btn-outline-dark" role="button" href="https://tickets-app-two.vercel.app/"  target="_blank"><Icon.ArrowUpRightCircle/></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card rounded shadow"
              style={{ width: "300px", marginTop: "10px" }}
            >
              <img className="img-fluid img-top" src={proyecto5} alt="logoHtml" />
              <div className="card-body">
                <h5 className="card-title">App de productos</h5>
                <h6 className="card-content">
                  es una parte de una aplicación que registra productos, aplicable a la construcción de una aplicación completa de punto de venta, desarrollada con Bootstrap, HTML, y javascript.
                </h6>
                <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro/appProducts" target="_blank"><Icon.Github/></a>
                <a className="btn btn-outline-dark" role="button" href="https://app-products.vercel.app/"  target="_blank"><Icon.ArrowUpRightCircle/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proyects;
