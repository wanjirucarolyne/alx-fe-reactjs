import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming useAuth is in a hooks folder

const ProtectedRoute = () => {
  const isAuthenticated = useAuth(); // Custom hook to check authentication

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
