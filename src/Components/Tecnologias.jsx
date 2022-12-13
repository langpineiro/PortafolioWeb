import React from "react";
import Html from "../images/Html.jpg";
import Bootstrap from "../images/logoBootstrap.png";
import Js from "../images/jsLogo.png";
import Sql from '../images/sql.jpg';
import reactlogo from '../images/reactlogo.jpeg'; 
import lenguaje from '../images/logoC.png'
import "./Navbar.css";
const Tecnologias = () => {
  return (
    <div class="container text-center align-items:center justify-content: center">
      <h2>
        <span>Experiencia</span> en{" "}
      </h2>
      <div class="row row-cols-auto">
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={Html} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <h6 className="card-content">
                HTML significa HyperText Markup Language y es una tecnología que
                nos permite estructurar el contenido básico de nuestra web
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={Bootstrap} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <h6 className="card-content">
                Bootstrap es un framework de CSS que nos permite estilizar
                nuestras páginas web, haciendo que estas se vean mas amigables
                con el usuario
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={Js} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <h6 className="card-content">
                Javascript es un lenguaje de programación mas utilizado en el
                desarrollo web, aunque también es utilizado en otro tipo de
                desarrollo, nos permite darle funcionalidad a nuestros sitios
                web y tambien darle animacion a estos mediante librerias
                especificas.
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={Sql} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">SQL</h5>
              <h6 className="card-content">
                Structured Query Language es un lenguaje propio para las bases de datos relacionales, este lenguaje nos permite interactuar con los datos que almacenan los diferentes sistemas manejadores de base de datos, tales como mysql, sql server entre otros. 
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={reactlogo} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">React Js</h5>
              <h6 className="card-content">
                React Js es un framework de Javascript que nos permite integrar lenguajes como html, css, y Javascript de forma mas amigable haciendo el desarrollo web  más sencillo, este framework se basa en componentes. 
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            className="card rounded shadow"
            style={{ width: "300px", marginTop: "10px" }}
          >
            <img className="img-fluid img-top" src={lenguaje} alt="logoHtml" />
            <div className="card-body">
              <h5 className="card-title">C#</h5>
              <h6 className="card-content">
                Es un lenguaje de programación tipado desarrollado por Microsoft, he utilizado este lenguaje para desarrollo de aplicaciones de escritorio y web mediante el patron Modelo, Vista, Controlador. 
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
