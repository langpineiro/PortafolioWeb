import React from "react";
import * as Icon from 'react-bootstrap-icons';
const Footer = () => {
  return (
    <>
      <footer className="text-center" >
        <div className="container pt-4">
          <section className="mb-4">
            <a className="btn btn-outline-dark" role="button" href="https://github.com/langpineiro" target="_blank"><Icon.Github/></a>
            <a
              className="btn btn-outline-danger m-1"
              href="https://instagram.com/anthony_lang_pineiro?igshid=YmMyMTA2M2Y="
              role="button"
              target="_blank"
              data-mdb-ripple-color="dark"
            >
              <Icon.Instagram/>
            </a>

            <a
              className="btn btn btn-outline-primary m-1"
              href="https://www.facebook.com/profile.php?id=100008424971242&mibextid=LQQJ4d"
              role="button"
              target="_blank"
              data-mdb-ripple-color="dark"
            >
              <Icon.Facebook/>
            </a>
            <a
              className="btn btn-outline-info  m-1"
              href="https://www.linkedin.com/in/anthony-ernesto-511b46157/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <Icon.Linkedin/>
            </a>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
        >
          © 2022 Copyright:
          Anthony Lang
          Desarrollando con amor  
          <Icon.ArrowThroughHeart/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
