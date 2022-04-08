import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Class_Based_Solution/App";
import AppUsingContext from "./Class_Based_Context_Solution/AppUsingContext";
import AppErrorBoundary from "./Class_Error_Boundaries/AppErrorBoundary";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <AppUsingContext />
    <hr />
    <AppErrorBoundary />
  </React.StrictMode>
);
