import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppProviders from "./styles/AppProviders.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
