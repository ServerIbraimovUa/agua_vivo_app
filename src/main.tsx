import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/agua_vivo_app">
      <App />
    </BrowserRouter>
  </StrictMode>
);
