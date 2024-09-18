import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModeContextProvider } from "./contexts/modeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </StrictMode>
);
