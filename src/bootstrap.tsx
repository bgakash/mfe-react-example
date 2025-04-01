import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Import <SaltProvider>
import { SaltProvider } from "@salt-ds/core";

// Import theme CSS
import "@salt-ds/theme/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SaltProvider
      enableStyleInjection={true}
      applyClassesTo="root"
      children={<App />}
    />
  </StrictMode>
);
