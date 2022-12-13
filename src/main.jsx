import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Footer from './Components/Footer'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
      <Footer/>
  </BrowserRouter>
    </React.StrictMode>
);
