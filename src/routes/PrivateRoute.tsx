import React from 'react';
import { Navigate, Route } from 'react-router-dom';// Replace '../path/to/useAuth' with the actual path to the 'useAuth' module

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Replace 'useAuth()' with the actual 'useAuth' hook
  const { currentUser } = useAuth();

  const isAuthenticated = currentUser != null;

  return isAuthenticated ? (
    <Route element={children} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
function useAuth(): { currentUser: any; } {
  throw new Error('Function not implemented.');
}

