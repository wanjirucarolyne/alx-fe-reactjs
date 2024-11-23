import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check (e.g., from localStorage or an API call)
    const authStatus = localStorage.getItem('auth') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return isAuthenticated;
};
