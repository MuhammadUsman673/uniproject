import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App";
import { FilterProvider } from "./contexts/filterContext";
import { BrowserRouter } from "react-router-dom";
import { CompareProvider } from "./contexts/compareContext";
import { SelectionProvider } from "./contexts/selectionContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FilterProvider>
        <CompareProvider>
          <SelectionProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SelectionProvider>
        </CompareProvider>
      </FilterProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
