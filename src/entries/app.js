import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import App from "../pages/containers/app";

const homeContainer = document.getElementById("home-container");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  homeContainer
);
