import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/Account" />;
  return <Outlet />;
};

export default PrivateRoute;
