import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

const root = document.getElementById("root");

if (root != null) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
