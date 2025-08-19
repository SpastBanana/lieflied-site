// src/components/home/Logout.jsx
import { useContext, useEffect } from "react";
import { AuthContext } from "../../api/AuthContext";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { setAuthenticated } = useContext(AuthContext); // Get setAuthenticated function
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    setAuthenticated(false); // Clear the authentication state
    navigate("/", { replace: true }); // Redirect to home page after logout
  }, [setAuthenticated, navigate]);

  return <div>Logging out...</div>; // Optional: Show a loading message or spinner
};
