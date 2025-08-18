import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { authenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!authenticated && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  return children;
}
