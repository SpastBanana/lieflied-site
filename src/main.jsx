import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./api/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import "./admin.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
