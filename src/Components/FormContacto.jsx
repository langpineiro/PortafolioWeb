import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { json } from "react-router";

const validationSchema = yup.object({
  Nombre: yup
    .string("Ingresa un tu nombre")
    .required("el nombre  es requerido"),
  apellido: yup
    .string("ingresa una descripcion a la categoria")
    .required("el apellido es requerido"),
  email: yup
    .string("ingresa tu correo electrónico de contacto")
    .email("correo electrónico inválido")
    .required("el correo electrónico es requerido"),
  motivo: yup
    .string("ingresa el motivo de tu contacto")
    .required("el motivo es requerido"),
});

const FormContacto = () => {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      apellido: "",
      email: "",
      motivo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify({
        'nombre': values.Nombre,
        'apellido':  values.apellido,
        'email':  values.email,
        'motivo':  values.motivo
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
                name="apellido"
                id="apellido"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.apellido && Boolean(formik.errors.apellido)
                }
                helperText={formik.touched.apellido && formik.errors.apellido}
              />
              {formik.touched.apellido && Boolean(formik.errors.apellido) ? (
                <div className="text-danger">{formik.errors.apellido}</div>
              ) : null}
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && Boolean(formik.errors.email)? (
                <div className="text-danger">{formik.errors.email}</div>
              ): null}
            </div>
            <div class="mb-4">
              <label for="textarea">Motivo</label>
              <textarea
                class="form-control"
                id="motivo"
                name="motivo"
                rows="3"
                value={formik.values.motivo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.motivo && Boolean(formik.errors.motivo)}
                helperText={formik.touched.motivo && formik.errors.motivo}
              ></textarea>
              {formik.touched.motivo && Boolean(formik.errors.motivo)? (
                <div className="text-danger">{formik.errors.motivo}</div>
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
