import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios'; 

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
      "Nombre": "",
      "Apellido": "",
      "Correo": "",
      "Motivo": "",
    },
    validationSchema: validationSchema,
    onSubmit: async  (values) => {
      await axios.post("https://solicitudesportafolioweb-production.up.railway.app/", values)
            .then(res => alert('Informacion Enviada Correctamente ', res.data.Nombre))
            .catch(err => console.error(err)); 
      window.location.reload(true); 
    },
  });
  return (
    <div className="container  w-75  bg-primary mt-5 rounded shadow">
      <div className="row align-items-stretch">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
        <div className="col bg-white p-5 rounded-end">
          <h2 className="fw-bold text-center py-5">Contactar</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="text" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
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
            <div className="mb-4">
              <label htmlFor="text2" className="form-label">
                Apellido
              </label>
              <input
                type="text2"
                className="form-control"
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
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control"
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
            <div className="mb-4">
              <label htmlFor="textarea">Motivo</label>
              <textarea
                className="form-control"
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
            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
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
