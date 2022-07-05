import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("app");
if (app) {
  createRoot(app).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
