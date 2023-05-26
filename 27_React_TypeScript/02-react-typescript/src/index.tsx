import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./_01_basics_todos_app/App";
import AppContextAPI from "./_02_context_api_todos_app/AppContextAPI";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
    <hr />
    <AppContextAPI />
  </StrictMode>,
);
