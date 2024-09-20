import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = (): boolean => {
  return localStorage.getItem("authToken") !== null;
};

interface PrivateRouteProp {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProp> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
