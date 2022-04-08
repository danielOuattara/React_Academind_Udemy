import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./Class_Based_Solution/App";
import AppUsingContext from "./Class_Based_Context_Solution/AppUsingContext";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <AppUsingContext />
  </React.StrictMode>
);
