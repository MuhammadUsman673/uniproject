import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App";
import { FilterProvider } from "./contexts/filterContext";
import { BrowserRouter } from "react-router-dom";
import { CompareProvider } from "./contexts/compareContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FilterProvider>
        <CompareProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CompareProvider>
      </FilterProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
