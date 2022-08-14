import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import UpperButton from "./components/UpperButton/UpperButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <UpperButton />
    </BrowserRouter>
  </React.StrictMode>
);
