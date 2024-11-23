import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simulate an authentication status
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
