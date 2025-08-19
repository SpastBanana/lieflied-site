// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import "./admin.css";
import App from "./App.jsx";
import Admin from "./Admin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
