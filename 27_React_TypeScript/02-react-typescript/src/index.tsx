import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./_01_basics_todos_app/App";
import AppContextAPIVersion1 from "./_02_context_api_todos_app_version1/AppContextAPIVersion1";
import AppContextAPIVersion2 from "./_02_context_api_todos_app_version2/AppContextAPIVersion2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
    <hr />
    <AppContextAPIVersion1 />
    <hr />
    <AppContextAPIVersion2 />
  </StrictMode>,
);
