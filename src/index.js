import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/zombie-uswds">
    <App />
  </BrowserRouter>
);
