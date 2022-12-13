import React from "react";
import Logo from "../images/logo.jpg";
const FormContacto = () => {
  return (
    <div class="container  w-75  bg-primary mt-5 rounded shadow">
      <div class="row align-items-stretch">
        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          <img
            src={Logo}
            className="img-fluid align-items:center justify-content:center"
          />
        </div>
        <div class="col bg-white p-5 rounded-end">
          <h2 class="fw-bold text-center py-5">Contactar</h2>

          <form>
            <div class="mb-4">
              <label for="text" class="form-label">
                Nombre
              </label>
              <input type="text" class="form-control" name="name" />
            </div>
            <div class="mb-4">
              <label for="text2" class="form-label">
                Apellido
              </label>
              <input type="text2" class="form-control" name="lastname" />
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">
                Correo electronico
              </label>
              <input type="email" class="form-control" name="email" />
            </div>
            <div class="mb-4">
              <label for="textarea">Motivo</label>
              <textarea
                class="form-control"
                id="textarea"
                rows="3"
              ></textarea>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-danger">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
