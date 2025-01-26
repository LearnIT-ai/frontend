import { StrictMode } from "react";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./i18n.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="loading...">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
