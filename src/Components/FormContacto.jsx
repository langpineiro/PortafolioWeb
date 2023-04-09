import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { json } from "react-router";

const validationSchema = yup.object({
  Nombre: yup
    .string("Ingresa un tu nombre")
    .required("el nombre  es requerido"),
  Apellido: yup
    .string("ingresa una descripcion a la categoria")
    .required("el apellido es requerido"),
  Correo: yup
    .string("ingresa tu correo electrónico de contacto")
    .email("correo electrónico inválido")
    .required("el correo electrónico es requerido"),
  Motivo: yup
    .string("ingresa el motivo de tu contacto")
    .required("el motivo es requerido"),
});

const FormContacto = () => {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Apellido: "",
      Correo: "",
      Motivo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify({
        'nombre': values.Nombre,
        'apellido':  values.Apellido,
        'email':  values.Correo,
        'motivo':  values.Motivo
      }));
      window.location.reload(true); 
    },
  });
  return (
    <div class="container  w-75  bg-primary mt-5 rounded shadow">
      <div class="row align-items-stretch">
        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
        <div class="col bg-white p-5 rounded-end">
          <h2 class="fw-bold text-center py-5">Contactar</h2>

          <form onSubmit={formik.handleSubmit}>
            <div class="mb-4">
              <label for="text" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="Nombre"
                name="Nombre"
                value={formik.values.Nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
                helperText={formik.touched.Nombre && formik.errors.Nombre}
              />
              {formik.touched.Nombre && Boolean(formik.errors.Nombre) ? (
                <div className="text-danger">{formik.errors.Nombre}</div>
              ) : null}
            </div>
            <div class="mb-4">
              <label for="text2" class="form-label">
                Apellido
              </label>
              <input
                type="text2"
                class="form-control"
                name="Apellido"
                id="Apellido"
                value={formik.values.Apellido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Apellido && Boolean(formik.errors.Apellido)
                }
                helperText={formik.touched.Apellido && formik.errors.Apellido}
              />
              {formik.touched.Apellido && Boolean(formik.errors.Apellido) ? (
                <div className="text-danger">{formik.errors.Apellido}</div>
              ) : null}
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                class="form-control"
                name="Correo"
                id="Correo"
                value={formik.values.Correo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Correo && Boolean(formik.errors.Correo)}
                helperText={formik.touched.Correo && formik.errors.Correo}
              />
              {formik.touched.Correo && Boolean(formik.errors.Correo)? (
                <div className="text-danger">{formik.errors.Correo}</div>
              ): null}
            </div>
            <div class="mb-4">
              <label for="textarea">Motivo</label>
              <textarea
                class="form-control"
                id="Motivo"
                name="Motivo"
                rows="3"
                value={formik.values.Motivo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Motivo && Boolean(formik.errors.Motivo)}
                helperText={formik.touched.Motivo && formik.errors.Motivo}
              ></textarea>
              {formik.touched.Motivo && Boolean(formik.errors.Motivo)? (
                <div className="text-danger">{formik.errors.Motivo}</div>
              ): null}
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
