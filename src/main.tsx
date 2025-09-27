import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./contexts/filterContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FilterProvider>
        <App />
      </FilterProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
