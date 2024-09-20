import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Routes from "./routes/index.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes>
      <App />
    </Routes>
  </StrictMode>
);
